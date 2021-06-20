<script>
	import { createEventDispatcher } from "svelte"
	const dispatch = createEventDispatcher()

	export let domain
	$: {
		if (domain) {
			dispatch("domainSearch", { domain })
		}
	}
</script>

<div class="content">
	<div id="domain-search" class="search">
		<label for="domain">
			<span class="is-family-secondary">Your value:</span>
		</label>
		<input type="text" bind:value={domain} />
	</div>
</div>
