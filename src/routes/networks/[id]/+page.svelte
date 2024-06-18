<script lang="ts">
  import type { PageData } from "./$types";
  import OnOffButton from "$lib/components/OnOffButton.svelte";

  export let data: PageData;

  $: network = data.network;
</script>

<header class="flex items-center gap-2">
  <h1><code>{network.id}</code></h1>

  <span class="font-bold text-zinc-600">{network.name}</span>

  <div
    class="rounded bg-zinc-800 px-2"
    class:text-fuchsia-400={network.type === "PRIVATE"}
    class:text-green-400={network.type === "PUBLIC"}
  >
    <code>{network.type}</code>
  </div>

  <div
    class="rounded bg-zinc-800 px-2"
    class:text-green-400={network.status === "OK"}
    class:text-red-400={network.status !== "OK"}
  >
    <code>{network.status}</code>
  </div>
</header>

<h2>Settings</h2>
<div class="flex flex-col gap-2">
  <div>
    <OnOffButton value={network.allowManaged} />
    Allow Managed
  </div>

  <div>
    <OnOffButton value={network.allowGlobal} />
    Allow Global
  </div>

  <div>
    <OnOffButton value={network.allowDefault} />
    Allow Default
  </div>

  <div>
    <OnOffButton value={network.allowDNS} />
    Allow DNS
  </div>
</div>

<h2>Assigned addresses</h2>
<ul class="list-inside list-diamond">
  {#each network.assignedAddresses as address}
    <li>
      <code>
        <span class="text-teal-400">
          {address.split("/").at(0)}
        </span>
        <span>/</span>
        <span class="text-sky-400">
          {address.split("/").at(1)}
        </span>
      </code>
    </li>
  {:else}
    <code class="rounded bg-zinc-800 px-2">No address</code>
  {/each}
</ul>

<pre>
  <code>
  {JSON.stringify(network, null, 2)}
  </code>
</pre>
