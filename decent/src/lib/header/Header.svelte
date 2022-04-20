<script>
	import { page } from '$app/stores';
</script>

<header>
    {#if $page.url.pathname !== '/'}
    <nav class="nav">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Slides</a></li>
        </ul>
    </nav>
    {/if}
    <h1 class="title">{$page.stuff.title}</h1>
    <div class="row">
      <span class="summary">{$page.stuff.description}</span>
    </div>
</header>
