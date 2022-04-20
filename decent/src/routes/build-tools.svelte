<script context="module">
	const pageTitle = "Build tools";
	const description = "Today we look at introducing build tools in a modern development workflow, including task runners, toolchains, and bundlers. Then we get a project up and running using Vite."
	export const prerender = true;
	export function load({params, stuff}) {
		return {
	      stuff: {
	      	title: pageTitle,
	      	description: description,
            hasExamples: true
	      }
	    };
	};
</script>
<script>
	import SEO from '$lib/SEO.svelte';
	import { page } from '$app/stores';
    import BasicSection from '$lib/basicSection.svelte';
    import Ext from '$lib/Ext.svelte';
</script>

<SEO />

<article>
        <section class="row">
        <div class="col">
            <nav class="toc">
                <h2 class="headline">Table of Contents</h2>
                <ul>
                    <li>
                        <a href="#nerdSniping">Nerd Sniping</a>
                        <ul>
                            <li><a href="#weirdState">The (weird) state of build tools</a></li>
                        </ul>
                    </li>
                    <li><a href="#problems">Problems build tools solve</a></li>
                    <li><a href="#categories">Categories of build tools</a>
                        <ul>
                            <li><a href="#task-runners">Task runners</a>
                                <ul class="post-only">
                                    <li><a href="#task-runner-list">List of task runners</a></li>
                                </ul>
                            </li>
                            <li><a href="#toolchains">Toolchains<ul class="post-only">
                                        <li><a href="#toolchain-list">List of toolchains</a></li>
                                    </ul></a></li>
                            <li><a href="#bundlers">Bundlers</a>
                                <ul class="post-only">
                                    <li><a href="#bundler-list">List of bundlers</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#try-it">Let's try out a toolchain</a>
                        <ul>
                            <li><a href="#sass-vite">SASS support in Vite</a></li>
                            <li><a href="#module-vite">Module bundling in Vite</a></li>
                            <li><a href="#prod">Building for production</a></li>
                            <li><a href="#preview">Previewing production</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</article>