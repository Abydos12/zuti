<script lang="ts">
  import { page } from "$app/stores";
  import type { Network } from "$lib/zerotier/models";
  import NetworkStatusBadge from "$lib/components/network/NetworkStatusBadge.svelte";

  export let network: Network;

  $: href = `/networks/${network.id}`;
  $: isActive = $page.url.pathname === href;
  $: activeClass = isActive ? "bg-zinc-800" : "hover:bg-zinc-700";
</script>

<a {href} class="block rounded-sm p-2 {activeClass} group">
  <div
    class="border-s-4 ps-2 {isActive
      ? 'border-orange-500'
      : 'border-transparent'}"
  >
    <div>
      <small class="text-orange-500">NAME:</small>
      {network.name}
    </div>
    <div>
      <small class="text-orange-500">ID:</small>
      <code class="text-zinc-400">{network.id}</code>
    </div>
    <div>
      <small class="text-orange-500">STATUS:</small>
      <NetworkStatusBadge status={network.status} />
    </div>
  </div>
</a>
