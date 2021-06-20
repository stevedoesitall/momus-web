<script>
	import { onMount } from "svelte"
	import { getDeityById } from "../utils/get-deities"

	export let params

	let deity = {}
	let domains = []
	let loaded = false
	let failed = false

	onMount(async () => {
		deity = await getDeityById(params.id)

		if (!deity) {
			return (failed = true)
		}

		domains = deity.domain
		loaded = true
	})
</script>

<div class="content has-text-centered pt-5">
	<p><a href="/">Back</a></p>

	{#if failed}
		<h1 class="is-family-sans-serif has-text-weight-bold grey-dark">
			It must be Ragnarok since this doesn't exist!
		</h1>
	{:else if !loaded}
		<progress class="progress is-small is-primary" max="50">15%</progress>
	{:else}
		<h1 class="is-family-sans-serif has-text-weight-bold grey-dark">
			{deity.name}
		</h1>
		<h2>A {deity.region} {deity.type}</h2>
		<h2>Domains:</h2>
		{#each domains as domain (domain)}
			<p>{domain}</p>
		{/each}
	{/if}
</div>
