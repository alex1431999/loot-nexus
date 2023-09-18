<script lang="ts">
    import IconButton from '@smui/icon-button'
    import PlayerComponent from '../components/player.svelte';
    import type { Player } from '../types';

    export let players: Array<Player>;

    function addPlayer() {
        players = [...players, { name: '' }]
    }
</script>

<style>
    .player-list {
        display: flex;
    }
</style>

<div class="player-list">
    <span>Players</span>
    {#each players as player}
        <PlayerComponent bind:name={player.name}></PlayerComponent>
    {/each}
    <IconButton on:click={addPlayer} class="material-icons">add</IconButton>
</div>