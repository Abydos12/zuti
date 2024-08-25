<script lang="ts">
  import type { PageData } from "./$types";
  import { onMount } from "svelte";
  import { goto, invalidateAll } from "$app/navigation";
  import { zerotierApi } from "$lib/zerotier/api";
  import { writable } from "svelte/store";
  import Spinner from "$lib/components/Spinner.svelte";
  import type { NetworkUpdate } from "$lib/zerotier/models";
  import NetworkStatusBadge from "$lib/components/network/NetworkStatusBadge.svelte";
  import AssignedAddressesCard from "$lib/components/network/AssignedAddressesCard.svelte";
  import NetworkRoutesCard from "$lib/components/network/NetworkRoutesCard.svelte";

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
  class="flex flex-wrap items-center gap-2 rounded-sm border border-zinc-200 bg-zinc-100 p-2 dark:border-zinc-800 dark:bg-zinc-900"
>
  <h1><code>{network.id}</code></h1>

  <span class="flex-1 font-bold text-zinc-400 dark:text-zinc-600">
    {network.name}
  </span>

  <NetworkStatusBadge status={network.status} />

  <code
    class="rounded-sm bg-zinc-300 px-2 font-semibold dark:bg-zinc-800"
    class:dark:text-fuchsia-400={network.type === "PRIVATE"}
    class:text-fuchsia-600={network.type === "PRIVATE"}
    class:dark:text-green-400={network.type === "PUBLIC"}
    class:text-green-600={network.type === "PUBLIC"}
  >
    {network.type}
  </code>

  <button
    class="flex items-center gap-x-2 rounded-sm bg-red-600 px-2 font-semibold text-red-100 hover:bg-red-800 hover:text-white"
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

<div
  class="rounded-sm border border-zinc-200 bg-zinc-100 p-2 dark:border-zinc-800 dark:bg-zinc-900"
>
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

<AssignedAddressesCard {network} />

<NetworkRoutesCard {network} />

<pre>
  <code>
  {JSON.stringify(network, null, 2)}
  </code>
</pre>
