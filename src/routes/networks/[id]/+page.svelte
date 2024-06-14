<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  $: network = data.network;
</script>

<header class="flex items-center gap-2">
  <h1><code>{network.id}</code></h1>

  <div
    class="rounded bg-zinc-800 px-2"
    class:text-fuchsia-400={network.type === "PRIVATE"}
    class:text-green-400={network.type === "PUBLIC"}
  >
    <code>{network.type}</code>
  </div>
</header>

<pre>
  <code>
  {JSON.stringify(network, null, 2)}
  </code>
</pre>
