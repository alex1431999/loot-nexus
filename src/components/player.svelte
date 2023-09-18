<script lang="ts">
  import Textfield from "@smui/textfield";

  export let name: string;
</script>

<div>
    <Textfield bind:value={name}></Textfield>
</div>