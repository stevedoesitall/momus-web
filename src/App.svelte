<script>
	import router from 'page'

	import Home from './pages/Home.svelte'
	import About from './pages/About.svelte'
	import Error from './pages/Error.svelte'
	import Deity from './pages/Deity.svelte'

	let page
	let params

	router('/', () => (page = Home))
	router('/about', () => (page = About))

	router(
		'/deity/:id',
		(ctx, next) => {
			params = ctx.params
			next()
		},
		() => (page = Deity)
	)

	router('/*', () => (page = Error))

	router.start()
</script>

<div>
	{#if page === Home}
		<Home />
	{:else if page === About}
		<About />
	{:else if page === Deity}
		<Deity {params} />
	{:else}
		<Error />
	{/if}
</div>
