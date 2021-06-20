<script>
	import Header from "../components/UI/Header.svelte"
	import Button from "../components/UI/Button.svelte"
	import Search from "../components/UI/Search.svelte"
	import Info from "../components/Deities/Info.svelte"
	import { getDeities } from "../utils/get-deities"

	let deities = []
	let domain

	const handleGetDeities = async () => {
		deities = await getDeities(domain)
		domain = ""
	}

	const handleSearch = (event) => {
		domain = event.detail.domain
	}

	const saved = (event) => {
		console.log(event)
	}

	const clearDeities = () => {
		deities = []
	}

	$: if (domain) {
		console.log("Current domain is", domain)
	}
</script>

<div class="content has-text-centered">
	<Header />

	<ol class="is-family-secondary is-lower-roman">
		{#each deities as deity (deity.id)}
			<Info
				on:saved={saved}
				on:learn-more={() => alert("Learn More!")}
				name={deity.name}
				id={deity.id}
				domains={deity.domain}
			/>
		{:else}
			<p>No deities to show</p>
		{/each}
	</ol>

	<Search {domain} on:domainSearch={handleSearch} />

	<Button
		disabled={!domain}
		buttonAction={handleGetDeities}
		title="Search Deities"
	/>
	<Button
		disabled={!deities.length}
		buttonAction={clearDeities}
		title="Clear"
	/>
</div>
