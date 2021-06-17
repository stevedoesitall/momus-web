<script>
	import router from 'page'

	import Header from './components/UI/Header.svelte'
	import Button from './components/UI/Button.svelte'
	import Deity from './components/Deities/Deity.svelte'

	import Home from './pages/Home.svelte'
	import About from './pages/About.svelte'
	import Error from './pages/Error.svelte'

	let page
	let params

	router('/', () => (page = Home))
	router('/about', () => (page = About))

	router(
		'/deity:id',
		(ctx, next) => {
			params = ctx.parmas
			next()
		},
		() => (page = Deity)
	)

	router('/*', () => (page = Error))

	router.start()

	let deities = []
	let domain

	const saved = (event) => {
		console.log(event)
	}

	const getDeities = async () => {
		try {
			const response = await fetch(
				`https://api.momus.io/deities?domain=${domain}`,
				{
					headers: {
						'Access-Control-Allow-Origin': '*',
					},
				}
			)
			if (response.status === 204) {
				deities = []
				throw new Error('No deities to show!')
			}

			if (response.status === 404) {
				deities = []
				throw new Error('Something went wrong. Please try again later.')
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
	<Header />
	<svelte:component this={page} {params} />

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

	<Button {domain} {getDeities} />
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
