<script>
	let deities = []
	let domain
	let currentNum = deities.length

	const getDeities = async () => {
		try {
			const response = await fetch(
				`https://api.momus.io/deities?domain=${domain}`,
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
			domain = ''
		}
	}

	$: domain
	$: currentNum
</script>

<div class="content">
	<ol class="is-family-secondary is-lower-roman">
		{#each deities as deity (deity.id)}
			<li class="is-family-secondary">{deity.name}</li>
			<ul>
				{#each deity.domain as domain (domain)}
					<li class="is-family-secondary">{domain}</li>
				{/each}
			</ul>
		{:else}
			<p>No deities to show</p>
		{/each}
	</ol>

	<div id="domain-search" class="search">
		<label for="domain">
			<span class="is-family-secondary">Search by Domain:</span>
		</label>
		<input type="text" bind:value={domain} />
	</div>

	<button
		class="has-text-weight-bold button is-primary"
		disabled={!domain}
		on:click={getDeities}>Search Deities</button
	>
</div>

<style>
	.search {
		display: block;
		padding-bottom: 1em;
	}
</style>
