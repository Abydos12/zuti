<script lang="ts">
  import { networks } from "$lib/stores";
  import NetworkNavLink from "$lib/components/NetworkNavLink.svelte";
</script>

<aside class="flex flex-col gap-2 overflow-auto bg-zinc-900 px-2">
  <button class="rounded bg-zinc-950 hover:bg-zinc-700 hover:text-orange-500">
    + Network
  </button>
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
