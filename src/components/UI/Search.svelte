<script>
	import { createEventDispatcher } from "svelte"
	import About from "../../pages/About.svelte"
	const dispatch = createEventDispatcher()

	export let allDomains
	let domain
	$: {
		if (domain) {
			dispatch("domainSearch", { domain })
		}
	}
</script>

<div class="select is-primary is-normal mb-3">
	{#if !allDomains.length}
		<p>Fetching domains...</p>
	{:else}
		<select bind:value={domain}>
			<option>Domain</option>
			{#each allDomains as option}
				<option>{option}</option>
			{/each}
		</select>
	{/if}
</div>
