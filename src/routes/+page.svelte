<script lang="ts">
	import Item from '../components/item.svelte';
	import { items } from '$lib/data';
</script>

<div>
	{#each items as item}
		<Item {item} />
	{/each}
</div>
