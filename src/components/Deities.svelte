<script>
	export let deities
	let newDeity
	let currentNum = deities.length

	const addDeity = () => {
		deities = [...deities, { name: newDeity, id: deities.length + 1 }]
		currentNum++
		console.log(deities)
	}
	$: deities
	$: currentNum
	$: newDeity
</script>

<div class="content">
	<ol class="is-lower-roman">
		{#each deities as deity (deity.id)}
			<li>{deity.name}</li>
		{:else}
			<p>No deities to show</p>
		{/each}
	</ol>

	<input type="text" bind:value={newDeity} />
	<button on:click={addDeity}>Add</button>
</div>
