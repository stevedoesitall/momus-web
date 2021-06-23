<script>
	export let name
	export let id

	const slug = "/deity/" + id
</script>

<div class="container is-justify-content-center">
	<div class="card py-5 mb-5 px-6">
		<h2 class="is-family-secondary">{name}</h2>
		<p><a href={slug}>Learn more</a></p>
	</div>
</div>
