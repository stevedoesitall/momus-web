<script>
	import { onMount } from 'svelte'
	import { Router } from '@roxi/routify'
	import { routes } from '../.routify/routes'

	import Deities from './components/Deities.svelte'
	import Header from './components/Header.svelte'
</script>

<main>
	<div class="body">
		<Router {routes} />
		<Header />

		<Deities />
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
