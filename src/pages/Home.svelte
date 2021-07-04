<script>
	import Header from "../components/UI/Header.svelte"
	import Button from "../components/UI/Button.svelte"
	import Search from "../components/UI/Search.svelte"
	import DeityDetail from "../components/Deities/DeityDetail.svelte"
	import currentDeity from "../store"

	import { getDeities } from "../utils/get-deities"

	//Probably need to clean this up
	let deities = []
	let domain
	let allDomains = []
	let selectedDomain
	let message = "Search by Domain"

	;(async () => {
		const results = await getDeities()
		allDomains = results.domains
	})()

	const handleGetDeities = async () => {
		deities = await getDeities(domain)
		if (!deities.length) {
			message = "No deities found"
		}
		domain = ""
	}

	const handleSearch = (event) => {
		domain = event.detail.domain
	}

	const clearDeities = () => {
		deities = []
		message = "Search by Domain"
	}

	$: if (domain) {
		console.log("Current domain is", domain)
	}

	$: if (selectedDomain) {
		console.log("Current domain is", selectedDomain)
	}
</script>

<div class="content has-text-centered">
	<Header />
	{#if $currentDeity}
		<p>Last deity was {$currentDeity}</p>
	{/if}
	<!-- Let's move this -->
	<ol class="is-family-secondary is-lower-roman">
		{#each deities as deity (deity.id)}
			<DeityDetail name={deity.name} id={deity.id} />
		{:else}
			<p>{message}</p>
		{/each}
	</ol>

	<Search {allDomains} on:domainSearch={handleSearch} />

	<Button
		disabled={domain === "Domain"}
		buttonAction={handleGetDeities}
		title="Search"
	/>
	<Button
		disabled={!deities.length}
		buttonAction={clearDeities}
		title="Clear"
	/>
</div>
