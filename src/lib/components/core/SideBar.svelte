<script lang="ts">
  import NetworkNavLink from "$lib/components/network/NetworkNavLink.svelte";
  import type { Network } from "$lib/zerotier/models";

  export let networks: Network[] = [];
</script>

<aside class="flex flex-col gap-2 overflow-auto rounded bg-zinc-900 p-2">
  <a
    href="/networks/join"
    class="rounded-sm bg-zinc-800 p-2 text-center hover:bg-zinc-700 hover:text-white"
  >
    + Network
  </a>
  <hr class="border-zinc-700" />
  <code class="font-bold text-orange-500">NETWORKS</code>
  <nav class="overflow-auto">
    <ul class="flex flex-col gap-2">
      {#each networks as network}
        <li>
          <NetworkNavLink {network} />
        </li>
      {:else}
        <span>No networks</span>
      {/each}
    </ul>
  </nav>
</aside>

<style>
  aside {
    grid-area: 2 / 1 / 4 / 1;
  }
</style>
