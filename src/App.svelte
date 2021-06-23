<script>
	import router from "page"
	import Nav from "./components/UI/Nav.svelte"

	import Home from "./pages/Home.svelte"
	import About from "./pages/About.svelte"
	import Error from "./pages/Error.svelte"
	import Deity from "./pages/Deity.svelte"

	let page
	let params

	router("/", () => (page = Home))
	router("/about", () => (page = About))

	router(
		"/deity/:id",
		(ctx, next) => {
			params = ctx.params
			next()
		},
		() => (page = Deity)
	)

	router("/*", () => (page = Error))

	router.start()
	;(() => {
		const regex = /(https{0,1}:\/\/)?localhost:[0-9]{4}/
		const isDev = window.location.href.search(regex) !== -1
		if (isDev) {
			document.getElementById("title").innerHTML = "Momus DEV"
		}
	})()
</script>

<div class="content has-text-weight-semibold">
	<Nav />
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
