<script lang="ts">
  import { networks } from "$lib/stores";
  import NetworkNavLink from "$lib/components/NetworkNavLink.svelte";
</script>

<aside class="flex flex-col gap-2 overflow-auto p-2">
  <button class="rounded bg-zinc-800 hover:bg-zinc-700 hover:text-white">
    + Network
  </button>
  <hr class="border-zinc-700" />
  <code class="font-bold text-zinc-600">NETWORKS</code>
  <nav class="min-w-50 overflow-auto">
    <ul class="flex flex-col gap-2">
      {#each $networks as network}
        <li>
          <NetworkNavLink {network} />
        </li>
      {:else}
        <span>No networks</span>
      {/each}
    </ul>
  </nav>
</aside>
