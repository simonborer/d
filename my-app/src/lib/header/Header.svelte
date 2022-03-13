<script>
	import { page } from '$app/stores';
</script>

<header class="row">
{#if $page.url.pathname !== '/'}
<nav>
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Slides</a></li>
    </ul>
</nav>
{/if}
<h1 class="title">Decent Internet</h1>
<div class="col">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis, nisi ornare pellentesque tempor, mi ligula blandit augue, vel congue eros lacus ac quam. Sed ac blandit neque. Aliquam malesuada, nisl vitae ultrices efficitur, nunc justo commodo ipsum, eu ornare nisi nisi in diam. Donec eget consequat sapien. Mauris vehicula dignissim metus, nec viverra mi malesuada ac. Sed ac ante orci. In hac habitasse platea dictumst. Aenean mollis diam semper nulla bibendum bibendum. Nunc metus orci, condimentum vitae orci a, fermentum cursus risus. Quisque eget lectus gravida, pulvinar lectus vel, porttitor ante. Nulla nisi tortor, aliquet et elit ac, tincidunt finibus dolor. Morbi rhoncus, eros at tempus laoreet, libero sapien accumsan arcu, nec gravida augue tortor ut diam. Duis pretium diam erat, sed tincidunt ligula luctus eu. Proin vitae gravida mi. Nullam lobortis nisi lorem, vitae malesuada ex porttitor quis.
</div>
</header>
