<script context="module">
	const pageTitle = "Home";
	const description = "Decent internet for everybody"
	export const prerender = true;
	export function load({params, stuff}) {
		return {
	      stuff: {
	      	title: pageTitle,
	      	description: description
	      }
	    };
	};
</script>

<script>
	import SEO from '$lib/SEO.svelte';
	import { page } from '$app/stores';
</script>

<SEO />

<section>
	<h2>{pageTitle}</h2>
</section>