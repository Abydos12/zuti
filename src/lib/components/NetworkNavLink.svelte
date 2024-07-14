<script lang="ts">
  import { page } from "$app/stores";
  import type { Network } from "$lib/zerotier/models";

  export let network: Network;

  $: href = `/networks/${network.id}`;
  $: isActive = $page.url.pathname === href;
  $: activeClass = isActive
    ? "bg-zinc-800 text-zinc-200 border-s-2 border-orange-500"
    : "border-zinc-700 hover:bg-zinc-700 hover:text-white";
</script>

<a {href} class="block rounded-sm px-2 {activeClass}">
  <h2>{network.name}</h2>
  <div>
    <code class="text-zinc-400">{network.id}</code>
  </div>
  {#if network.status !== "OK"}
    <div>
      <code>{network.status}</code>
    </div>
  {/if}
</a>
