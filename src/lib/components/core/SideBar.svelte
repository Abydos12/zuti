<script lang="ts">
  import NetworkNavLink from "$lib/components/network/NetworkNavLink.svelte";
  import type { Network } from "$lib/zerotier/models";

  interface Props {
    networks?: Network[];
  }

  let { networks = [] }: Props = $props();
</script>

<aside
  class="flex flex-col gap-2 overflow-auto rounded-sm bg-zinc-100 p-2 [grid-area:sidebar] dark:bg-zinc-900"
>
  <a
    href="/networks/join"
    class="rounded-xs bg-zinc-200 p-2 text-center hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:hover:text-white"
  >
    + Network
  </a>
  <hr class="border-zinc-300 dark:border-zinc-700" />
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
