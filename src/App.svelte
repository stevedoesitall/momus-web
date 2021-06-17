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
</script>

<div>
	{#if page === Home}
		<Home />
	{:else if page === About}
		<About />
	{:else}
		<Error />
	{/if}
</div>
