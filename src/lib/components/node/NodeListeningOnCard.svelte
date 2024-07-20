<script lang="ts">
  import type { NodeStatus } from "$lib/zerotier/models";
  import AddressPortList from "$lib/components/AddressPortList.svelte";

  export let node: NodeStatus;
</script>

<div class="rounded-sm border border-zinc-800 bg-zinc-900 p-2">
  <h2 class="font-mono font-semibold uppercase text-orange-500">
    Listening on
  </h2>
  <AddressPortList addresses={node.config.settings.listeningOn} />
</div>
