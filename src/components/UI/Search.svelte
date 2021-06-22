<script>
	import { createEventDispatcher } from "svelte"
	const dispatch = createEventDispatcher()

	export let allDomains
	let domain
	$: {
		if (domain) {
			dispatch("domainSearch", { domain })
		}
	}
</script>

<div class="select is-primary is-normal mb-3">
	<select bind:value={domain}>
		<option>Domain</option>
		{#each allDomains as option}
			<option>{option}</option>
		{/each}
	</select>
</div>
