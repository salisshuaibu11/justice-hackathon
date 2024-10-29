<script>
	import { page } from '$app/stores'; // Import the page store
</script>

<a href="/home" class="flex items-center p-4 border-b">
	{#if $page.url.pathname === '/home'}
		<img src="/ham.svg" alt="Menu Icon" />
	{:else}
		<img src="/back.svg" alt="Back Icon" />
	{/if}
	<img class="block h-8 flex-1" src="/header-icon.svg" alt="Header Icon" />
</a>
