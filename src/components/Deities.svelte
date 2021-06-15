<script>
	export let deities
	let newDeity
	let currentNum = deities.length

	const addDeity = () => {
		deities = [...deities, { name: deity, id: currentNum }]
		currentNum++
	}

	$: deities
	$: currentNum
</script>

<div class="content">
	<input type="text" bind:value={newDeity} />
	<button on:click={addDeity}>Add</button>
	<ul>
		{#each deities as deity (deity.id)}
			<li class="is-lower-roman">{deity.name}</li>
		{:else}
			<p>No deities to show</p>
		{/each}
	</ul>
</div>
