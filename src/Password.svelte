<script>
	let allPasswords = []
	let currentPassword = ''
	let passwordValidity = 'short'

	$: if (currentPassword.trim().length < 5) {
		passwordValidity = 'short'
	} else if (currentPassword.trim().length < 5) {
		passwordValidity = 'long'
	} else {
		passwordValidity = 'valid'
	}

	const addPassword = () => {
		console.log('Saving')
		console.log(allPasswords)
		allPasswords.push(currentPassword)
	}

	$: allPasswords
</script>

<div>
	<input id="password" type="password" bind:value={currentPassword} />
	{#if passwordValidity === 'short'}
		<p>Too short</p>
	{:else if passwordValidity === 'long'}
		<p>Too long</p>
	{:else}
		<p>{currentPassword}</p>
		<button on:click={addPassword}>Save</button>
	{/if}

	<ul>
		{#each allPasswords as password (password)}
			<li>{password}</li>
		{:else}
			<p>No passwords to show</p>
		{/each}
	</ul>
</div>
