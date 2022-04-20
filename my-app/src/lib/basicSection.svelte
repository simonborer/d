<script>
	export let level;
	export let title;
	export let id;
	export let further;
	if (level) {
		level = parseInt(level)
	}
	if (!id) {
		id = title.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()).replace(/\./g, '');
	}
	// Hoboy it would be great to not have orphan words in titles
	// and also not wrap mid-word in mobile.
	// title = title.trim().replace(/\s([^\s]*)$/, '&nbsp;' + '$1');
	title = title.trim();
</script>
<section class="row{further ? ` further-reading` : ``}">
	{#if !further}
		{#if level === 2}<h2 id={id}>{@html title}</h2>
		{:else if level === 3}<h3 id={id}>{@html title}</h3>
		{:else if level === 4}<h4 id={id}>{@html title}</h4>
		{:else if level === 5}<h5 id={id}>{@html title}</h5>
		{:else if level === 6}<h6 id={id}>{@html title}</h6>
		{:else}
		<div id={id}>{@html title}</div>
		{/if}
	{/if}
	<div class="col">
	{#if further}
		{#if level === 2}<h2 id={id}>{@html title}</h2>
		{:else if level === 3}<h3 id={id}>{@html title}</h3>
		{:else if level === 4}<h4 id={id}>{@html title}</h4>
		{:else if level === 5}<h5 id={id}>{@html title}</h5>
		{:else if level === 6}<h6 id={id}>{@html title}</h6>
		{:else}
		<div id={id}>{@html title}</div>
		{/if}
	{/if}
	<slot></slot>
	</div>
</section>