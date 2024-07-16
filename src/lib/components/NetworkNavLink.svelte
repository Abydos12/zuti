<script lang="ts">
  import { page } from "$app/stores";
  import type { Network } from "$lib/zerotier/models";

  export let network: Network;

  $: href = `/networks/${network.id}`;
  $: isActive = $page.url.pathname === href;
  $: activeClass = isActive
    ? "bg-zinc-800"
    : "hover:bg-zinc-700 hover:text-white";
</script>

<a {href} class="block rounded-sm p-2 {activeClass}">
  <div
    class="border-s-4 ps-2 {isActive
      ? 'border-orange-500'
      : 'border-transparent'}"
  >
    <h2>{network.name}</h2>
    <div>
      <code class="text-zinc-400">{network.id}</code>
    </div>
    {#if network.status !== "OK"}
      <div>
        <code>{network.status}</code>
      </div>
    {/if}
  </div>
</a>
