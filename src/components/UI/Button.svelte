<script>
	export let domain
	export let getDeities
</script>

<div class="content">
	<button
		class="has-text-weight-bold button is-primary"
		disabled={!domain}
		on:click={getDeities}
	>
		Search Deities
	</button>
</div>
