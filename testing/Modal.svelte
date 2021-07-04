<script>
	import {
		createEventDispatcher,
		onMount,
		onDestroy,
		beforeUpdate,
		afterUpdate,
	} from "svelte"
	const dispatch = createEventDispatcher()

	let autoScroll = false

	onMount(() => {
		console.log("Mounted")
	})

	onDestroy(() => {
		console.log("Destroyed")
	})

	beforeUpdate(() => {
		console.log("Before update")
		autoScroll = true
	})

	afterUpdate(() => {
		console.log("After update")
		const modal = document.querySelector(".myModal")
		modal.scrollTo(0, modal.scrollHeight)
	})
</script>

<div class="myModal" on:click={() => dispatch("close")}>
	<header>
		<slot name="header" />
	</header>
	<div>
		<slot name="footer">there</slot>
	</div>
	<button on:click={() => dispatch("close")}>Close</button>
</div>
