<script>
	import { onMount } from 'svelte'

	let deities = []
	let done = false

	const addContact = () => {
		done = !done
	}

	onMount(async () => {
		const response = await fetch('https://api.momus.io/deities/', {
			mode: 'no-cors',
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
		})
		deities = await response.json()
		console.log(deities)
	})
</script>

<main>
	<div class="content">
		<h1>Welcome to Momus.io!</h1>
		<h3>actual content coming soon...</h3>

		<button on:click={addContact}>Add Contact Card</button>
		{#if done}
			<p>show me</p>
		{/if}
		{#each deities as deity, num}
			<p class="is-small">{num + 1}. {deity.name}</p>
			<ol class="is-lower-roman">
				{#each deity.domain as domain}
					<li>{domain}</li>
				{/each}
			</ol>
		{/each}
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
