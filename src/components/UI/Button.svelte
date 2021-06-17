<script>
	export let disabled
	export let buttonAction
	export let title
</script>

<div class="content">
	<button
		class="has-text-weight-bold button is-primary"
		{disabled}
		on:click={buttonAction}
	>
		{title}
	</button>
</div>
