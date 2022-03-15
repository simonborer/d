<script>
	import { page } from '$app/stores';
</script>

<header class="row">
{#if $page.url.pathname !== '/'}
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#">Slides</a></li>
    </ul>
</nav>
{/if}
<h1 class="title">{$page.stuff.title}</h1>
<div class="col">
  {$page.stuff.description}</div>
</header>
