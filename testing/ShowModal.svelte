<script>
	import { tick } from "svelte"
	import Modal from "./Modal.svelte"

	//Probably need to clean this up
	let text = "This is some text"
	let showModal = false

	const transform = (event) => {
		if (event.which !== 9) {
			return
		}
		event.preventDefault()
		const selectionStart = event.target.selectionStart
		const selectionEnd = event.target.selectionEnd
		const value = event.target.value

		text =
			value.slice(0, selectionStart) +
			value.slice(selectionStart, selectionEnd).toUpperCase() +
			value.slice(selectionEnd)

		tick().then(() => {
			event.target.selectionStart = selectionStart
			event.target.selectionEnd = selectionEnd
		})
	}
</script>

<div class="content has-text-centered">
	<!-- Lets make this something legit -->
	{#if showModal}
		<Modal on:close={() => (showModal = false)}>
			<h1 slot="header">Hi!</h1>
			<p slot="footer">Buckaroo</p>
		</Modal>
	{/if}

	<textarea rows="5" value={text} on:keydown={transform} />
	<button on:click={() => (showModal = true)}>Show Modal</button>
</div>
