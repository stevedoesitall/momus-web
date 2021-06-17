<script>
	import Header from '../components/UI/Header.svelte'
	import Button from '../components/UI/Button.svelte'
	import Deity from '../components/Deities/Deity.svelte'
	import Error from './Error.svelte'
	const apiKey = __myapp.env.API_KEY
	let deities = []
	let domain

	const saved = (event) => {
		console.log(event)
	}

	const clearDeities = () => {
		deities = []
	}

	const getDeities = async () => {
		try {
			const response = await fetch(
				`https://api.momus.io/deities?domain=${domain}`,
				{
					headers: {
						'Access-Control-Allow-Origin': '*',
						Authentication: apiKey,
					},
				}
			)
			if (response.status > 200) {
				let errMsg
				deities = []
				if (response.status === 204) {
					errMsg = 'No deities to show!'
				} else if (response.status === 404) {
					errMsg = 'Something went wrong. Please try again later.'
				}
				throw new Error(errMsg)
			}

			deities = await response.json()

			console.log('Loaded from the Momus API', deities)
		} catch (err) {
			console.log(err)
		} finally {
			console.log('Fetching finished')
			domain = ''
		}
	}
</script>

<div class="content">
	<!-- <Header /> -->
	<h1 class="is-family-sans-serif is-lowercase has-text-weight-bold grey-dark">
		Welcome to Momus.io!
	</h1>

	<ol class="is-family-secondary is-lower-roman">
		{#each deities as deity (deity.id)}
			<Deity
				on:saved={saved}
				on:learn-more={() => alert('Learn More!')}
				name={deity.name}
				id={deity.id}
				domains={deity.domain}
			/>
		{:else}
			<p>No deities to show</p>
		{/each}
	</ol>

	<div id="domain-search" class="search">
		<label for="domain">
			<span class="is-family-secondary">Search by Domain:</span>
		</label>
		<input type="text" bind:value={domain} />
	</div>

	<Button disabled={!domain} buttonAction={getDeities} title="Search Deities" />
	<Button
		disabled={!deities.length}
		buttonAction={clearDeities}
		title="Clear"
	/>
</div>

<style>
	.content {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		.content {
			max-width: none;
		}
	}

	.search {
		display: block;
		padding-bottom: 1em;
	}
</style>
