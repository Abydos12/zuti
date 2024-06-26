<script lang="ts">
  import type { PageData } from "./$types";
  import OnOffButton from "$lib/components/OnOffButton.svelte";
  import { onMount } from "svelte";
  import { goto, invalidateAll } from "$app/navigation";
  import { zerotierApi } from "$lib/zerotier/api";
  import { writable } from "svelte/store";
  import Spinner from "$lib/components/Spinner.svelte";

  export let data: PageData;

  $: network = data.network;

  const leaving = writable(false);

  onMount(() => {
    const interval = setInterval(invalidateAll, 10_000);
    return () => clearInterval(interval);
  });

  async function leave() {
    leaving.set(true);
    try {
      await zerotierApi.leaveNetwork(network.id);
      goto("/");
    } catch (err) {
    } finally {
      leaving.set(false);
    }
  }
</script>

<header class="flex flex-wrap items-center gap-2 rounded bg-zinc-900 p-2">
  <h1><code>{network.id}</code></h1>

  <span class="flex-1 font-bold text-zinc-600">{network.name}</span>

  <code
    class="rounded bg-zinc-800 px-2 font-semibold"
    class:text-green-500={network.status === "OK"}
    class:text-red-500={network.status !== "OK"}
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

  <button
    class="flex items-center gap-x-2 rounded-sm bg-red-600 px-2 font-semibold hover:bg-red-800 hover:text-white hover:ring-2 hover:ring-red-500"
    on:click={leave}
    disabled={$leaving}
  >
    <span class="h-4 w-4" class:hidden={!$leaving}>
      <Spinner />
    </span>
    {#if $leaving}
      Leaving &hellip;
    {:else}
      Leave
    {/if}
  </button>
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
