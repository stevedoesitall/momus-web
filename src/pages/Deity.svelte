<script>
	import { onMount } from "svelte"
	import { getById } from "../utils/get-deities"

	export let params

	let deity = {}
	let domain = []
	let loaded = false

	onMount(async () => {
		deity = await getById(params.id)
		domain = deity.domain
		loaded = true
	})
</script>

<div class="content has-text-centered pt-5">
	<p><a href="/">Back</a></p>

	{#if !loaded}
		<progress class="progress is-small is-primary" max="50">15%</progress>
	{:else}
		<h1 class="is-family-sans-serif has-text-weight-bold grey-dark">
			{deity.name}
		</h1>
		<h2>A {deity.region} {deity.type}</h2>
		<h2>Domains:</h2>
		{#each domain as d (d)}
			<p>{d}</p>
		{/each}
	{/if}
</div>
