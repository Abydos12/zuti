<script lang="ts">
  import type { NodeStatus } from "$lib/zerotier/models";
  import AddressPortList from "$lib/components/AddressPortList.svelte";

  export let node: NodeStatus;

  $: addresses = node?.config.settings.surfaceAddresses ?? [];
</script>

<div
  class="rounded-sm border border-zinc-300 bg-zinc-100 p-2 dark:border-zinc-800 dark:bg-zinc-900"
>
  <h2 class="font-mono font-semibold uppercase text-orange-500">
    Surface Addresses
  </h2>
  <AddressPortList {addresses} />
</div>
