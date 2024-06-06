<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  $: network = data.network;
</script>

<h1><code>{network.id}</code></h1>
