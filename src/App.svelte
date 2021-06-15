<script>
	import { onMount } from 'svelte'
	import Deities from './components/Deities.svelte'

	let deities = []

	//Note: Need to add API key as an enviornment variable
	onMount(async () => {
		const response = await fetch('https://api.momus.io/deities', {
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
		})
		deities = [...(await response.json())]
		console.log('Loaded from the Momus API', deities)
	})
</script>

<main>
	<div class="content">
		<h1>Welcome to Momus.io!</h1>

		<Deities {deities} />
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		text-transform: lowercase;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
