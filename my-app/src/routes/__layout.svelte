<script>
	import Header from '$lib/header/Header.svelte';
	import { page } from '$app/stores';
	import '../style.scss';
</script>

<Header />

<main>
	<slot />
</main>
