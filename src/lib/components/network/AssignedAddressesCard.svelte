<script lang="ts">
  import type { Network } from "$lib/zerotier/models";

  export let network: Network;
</script>

<div class="rounded-sm border border-zinc-800 bg-zinc-900 p-2">
  <h2 class="font-mono font-semibold uppercase text-orange-500">
    Assigned addresses
  </h2>
  <ul class="list-square list-inside">
    {#each network.assignedAddresses as address}
      {@const [ip, mask] = address.split("/")}
      <li>
        <code class="text-teal-400">
          {ip}
        </code>
        <code> / </code>
        <code class="text-sky-400">
          {mask}
        </code>
      </li>
    {:else}
      <code>No addresses</code>
    {/each}
  </ul>
</div>
