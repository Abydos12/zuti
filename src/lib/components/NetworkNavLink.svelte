<script lang="ts">
  import { page } from "$app/stores";

  export let network: Network;

  $: href = `/networks/${network.id}`;
  $: isActive = $page.url.pathname === href;
  $: activeClass = isActive
    ? "bg-zinc-800 text-zinc-200"
    : "border-zinc-700 bg-zinc-950 hover:bg-zinc-700 hover:text-white";
</script>

<a {href} class={`block rounded p-2 ${activeClass}`}>
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
