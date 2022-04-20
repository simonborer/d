<script context="module">
	
	export const prerender = true;
	const pageTitle = "Home";
	const description = "Decent internet for everybody"
	
	// Get all the other pages
	const modules = import.meta.glob("./**.svelte");
	let body = [];

	for (let path in modules) {
		let pathSanitized = path.replace(".svelte", "").replace("./", "/");
		body.push({
		  title: pathSanitized.substring(pathSanitized.lastIndexOf("/") + 1),
		  link: pathSanitized.includes("index") ? pathSanitized.replace("index", "") : pathSanitized
		});
	}

	export async function load({params, stuff}) {
		const menu = await Promise.all(body);
		return {
	      props: {
	        menu,
	      },
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
	export let menu;
</script>

<SEO />

<section>
	<ul>
	  {#each menu as item}
	    <li>
	      <a href={item.link}>{item.title}</a>
	    </li>
	  {/each}
	</ul>
</section>