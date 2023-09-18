<script lang="ts">
	import PlayerList from '../components/player-list.svelte'
	import type { Player } from '../types';

	let players: Array<Player> = []
</script>

<div>
	<PlayerList bind:players={players}></PlayerList>
</div>
