<script lang="ts">
  import type { PageData } from "./$types";
  import OnOffButton from "$lib/components/OnOffButton.svelte";
  import { onMount } from "svelte";
  import { invalidateAll } from "$app/navigation";

  export let data: PageData;

  $: network = data.network;

  onMount(() => {
    const interval = setInterval(invalidateAll, 10_000);
    return () => clearInterval(interval);
  });
</script>

<header class="flex items-center gap-2 rounded bg-zinc-900 p-2">
  <h1><code>{network.id}</code></h1>

  <span class="font-bold text-zinc-600">{network.name}</span>
  <span class="flex-1"></span>

  <code
    class="rounded bg-zinc-800 px-2 font-semibold"
    class:text-green-400={network.status === "OK"}
    class:text-red-400={network.status !== "OK"}
  >
    {network.status}
  </code>

  <code
    class="rounded bg-zinc-800 px-2 font-semibold"
    class:text-fuchsia-400={network.type === "PRIVATE"}
    class:text-green-400={network.type === "PUBLIC"}
  >
    {network.type}
  </code>
</header>

<div class="rounded bg-zinc-900 p-2">
  <h2 class="font-mono font-semibold uppercase text-orange-500">Settings</h2>
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
