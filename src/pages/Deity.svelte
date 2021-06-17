<script>
	//Should move these to separate file
	export let params

	let deity = {}
	let domain = []

	import { onMount } from 'svelte'
	onMount(async () => {
		try {
			const response = await fetch(
				`https://api.momus.io/deities/${params.id}`,
				{
					headers: {
						'Access-Control-Allow-Origin': '*',
						// Authorization: apiKey,
					},
				}
			)
			if (response.status > 200) {
				let errMsg
				if (response.status === 204) {
					errMsg = 'No deity to show!'
				} else if (response.status === 404) {
					errMsg = 'Something went wrong. Please try again later.'
				}
				console.log(errMsg)
				throw new Error(errMsg)
			}

			deity = await response.json()
			domain = deity.domain
			console.log('Loaded from the Momus API', deity)
		} catch (err) {
			console.log(err)
		} finally {
			console.log('Fetching finished')
		}
	})
</script>

<div class="content">
	<h1 class="is-family-sans-serif is-lowercase has-text-weight-bold grey-dark">
		{deity.name}
	</h1>
	<h2>A {deity.region} {deity.type}</h2>
	<h2>Domains:</h2>
	{#each domain as d (d)}
		<p>{d}</p>
	{/each}
</div>
