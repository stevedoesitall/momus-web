<script>
	import { createEventDispatcher } from "svelte"
	export let name
	export let id
	export let domains

	const url = "/deity/" + id
	const dispatch = createEventDispatcher()

	const saved = () => {
		dispatch("saved", "saved-data")
	}

	const learnMore = () => {
		dispatch("learn-more", "learn-more-data")
	}
</script>

<div class="content">
	<li class="is-family-secondary"><a href={url}>{name}</a></li>
	<ul>
		{#each domains as domain (domain + "-" + id)}
			<li class="is-family-secondary">{domain}</li>
		{/each}
	</ul>
	<button on:click={learnMore}>Learn More</button>
	<button on:click={saved}>Save for Later</button>
</div>
