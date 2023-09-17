<script lang="ts">
	import type { Item } from '../types.js';

	export let item: Item;

	let amount: number = 0;
</script>

<div>
	<span>{item.name}</span>
</div>
