<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.stuff.title}</title>
	<meta name="description" content="{$page.stuff.description}">
	<meta property="og:title" content="{$page.stuff.title}">
	<meta property="og:description" content="{$page.stuff.description}">
	<meta property="og:url" content="{$page.url}">
	<link rel="canonical" href="{$page.url}">
</svelte:head>