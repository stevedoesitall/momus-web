<script>
	//Should move these to separate file
	export let params

	let deity = {}
	let domain = []

	import { onMount } from "svelte"
	import { getById } from "../apis/get-deities"

	onMount(async () => {
		deity = await getById(params.id)
		domain = deity.domain
	})
</script>

<div class="content has-text-centered">
	<p><a href="/">Back</a></p>
	<h1 class="is-family-sans-serif is-lowercase has-text-weight-bold grey-dark">
		{deity.name}
	</h1>
	<h2>A {deity.region} {deity.type}</h2>
	<h2>Domains:</h2>
	{#each domain as d (d)}
		<p>{d}</p>
	{/each}
</div>
