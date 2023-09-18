<script lang="ts">
	import type { Item } from '../types.js';
	import Textfield from "@smui/textfield";

	export let item: Item;

	let amount: number = 0;
</script>

<div>
	<Textfield type="number" label="{item.name}" bind:value={amount} ></Textfield>
</div>
