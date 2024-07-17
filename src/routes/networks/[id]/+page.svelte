<script lang="ts">
  import type { PageData } from "./$types";
  import { onMount } from "svelte";
  import { goto, invalidateAll } from "$app/navigation";
  import { zerotierApi } from "$lib/zerotier/api";
  import { writable } from "svelte/store";
  import Spinner from "$lib/components/Spinner.svelte";
  import type { NetworkUpdate } from "$lib/zerotier/models";
  import NetworkStatusBadge from "$lib/components/NetworkStatusBadge.svelte";

  export let data: PageData;

  $: network = data.network;

  const leaving = writable(false);
  const updating = writable(false);

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

  async function update(options: NetworkUpdate) {
    updating.set(true);
    try {
      await zerotierApi.updateNetwork(network.id, options);
    } catch (err) {
    } finally {
      updating.set(false);
    }
  }
</script>

<header
  class="flex flex-wrap items-center gap-2 rounded-sm border border-zinc-800 bg-zinc-900 p-2"
>
  <h1><code>{network.id}</code></h1>

  <span class="flex-1 font-bold text-zinc-600">{network.name}</span>

  <NetworkStatusBadge status={network.status} />

  <code
    class="rounded bg-zinc-800 px-2 font-semibold"
    class:text-fuchsia-400={network.type === "PRIVATE"}
    class:text-green-400={network.type === "PUBLIC"}
  >
    {network.type}
  </code>

  <button
    class="flex items-center gap-x-2 rounded-sm border-transparent bg-red-600 px-2 font-semibold hover:border-red-500 hover:bg-red-800 hover:text-white"
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

<div class="rounded-sm border border-zinc-800 bg-zinc-900 p-2">
  <h2 class="font-mono font-semibold uppercase text-orange-500">Settings</h2>
  <div class="flex flex-wrap gap-8">
    <label class="flex items-center gap-2">
      <input
        type="checkbox"
        checked={network.allowManaged}
        on:change|preventDefault={async (e) =>
          await update({ allowManaged: e.currentTarget.checked })}
      />
      Allow Managed
    </label>

    <label class="flex items-center gap-2">
      <input
        type="checkbox"
        checked={network.allowGlobal}
        on:change|preventDefault={async (e) =>
          await update({ allowGlobal: e.currentTarget.checked })}
      />
      Allow Global
    </label>

    <label class="flex items-center gap-2">
      <input
        type="checkbox"
        checked={network.allowDefault}
        on:change|preventDefault={async (e) =>
          await update({ allowDefault: e.currentTarget.checked })}
      />
      Allow Default
    </label>

    <label class="flex items-center gap-2">
      <input
        type="checkbox"
        checked={network.allowDNS}
        on:change|preventDefault={async (e) =>
          await update({ allowDNS: e.currentTarget.checked })}
      />
      Allow DNS
    </label>
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

<div>
  <table class="text-left">
    <thead class="border-b border-zinc-700">
      <tr>
        <th class="p-2">ADDRESS</th>
        <th class="p-2">MASK</th>
      </tr>
    </thead>
    <tbody>
      {#each network.assignedAddresses as address}
        <tr class="border-t border-zinc-700">
          <td class="p-2 text-teal-400">
            <code>
              {address.split("/").at(0)}
            </code>
          </td>
          <td class="p-2 text-sky-400">
            <code>
              {address.split("/").at(1)}
            </code>
          </td>
        </tr>
      {:else}
        <tr>
          <td>
            <code class="rounded bg-zinc-800 px-2">No address</code>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<div>
  <table class="text-left">
    <thead class="border-b-2 border-zinc-700">
      <tr>
        <th class="p-2">TARGET</th>
        <th class="p-2">VIA</th>
      </tr>
    </thead>
    <tbody>
      {#each network.routes as route}
        <tr class="border-t border-zinc-700">
          <td class="p-2">
            <code>
              {route.target}
            </code>
          </td>
          <td class="p-2">
            <code>
              {route.via}
            </code>
          </td>
        </tr>
      {:else}
        <tr>
          <td>
            <code class="rounded bg-zinc-800 px-2">No address</code>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<div>
  <ul>
    {#each network.routes as route}
      <li class="border-t border-zinc-700">
        {route.target} -> {route.via}
      </li>
    {:else}
      <tr>
        <td>
          <code class="rounded bg-zinc-800 px-2">No address</code>
        </td>
      </tr>
    {/each}
  </ul>
</div>

<pre>
  <code>
  {JSON.stringify(network, null, 2)}
  </code>
</pre>
