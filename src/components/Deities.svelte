<script>
	let deities = []
	let domain
	let currentNum = deities.length

	const getDeities = async () => {
		try {
			const response = await fetch(
				`https://api.momus.io/deities?domain=${domain.toLowerCase()}`,
				{
					headers: {
						'Access-Control-Allow-Origin': '*',
					},
				}
			)
			if (response.status === 204) {
				deities = []
				throw new Error('No deities to show!')
			}

			deities = await response.json()

			console.log('Loaded from the Momus API', deities)
		} catch (err) {
			console.log(err)
		} finally {
			console.log('Fetching finished')
		}
	}

	$: domain
	$: currentNum
</script>

<div class="content">
	<ol class="is-lower-roman">
		{#each deities as deity (deity.id)}
			<li>{deity.name}</li>
		{:else}
			<p>No deities to show</p>
		{/each}
	</ol>

	<div id="domain-search" class="search">
		<label for="domain">Search by Domain: </label><input
			type="text"
			bind:value={domain}
		/>
	</div>

	<button on:click={getDeities}>Search Deities</button>
</div>

<style>
	.search {
		display: block;
		padding-bottom: 1em;
	}
</style>
