<script lang="ts">
  import NetworkNavLink from "$lib/components/NetworkNavLink.svelte";
  import type { Network } from "$lib/zerotier/models";

  export let networks: Network[] = [];
</script>

<aside
  class="flex min-w-48 flex-col gap-2 overflow-auto border-e border-zinc-600 p-2"
>
  <a
    href="/networks/join"
    class="rounded-sm bg-zinc-800 text-center hover:bg-zinc-700 hover:text-white"
  >
    + Network
  </a>
  <hr class="border-zinc-700" />
  <code class="font-bold text-orange-500">NETWORKS</code>
  <nav class="min-w-50 overflow-auto">
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
