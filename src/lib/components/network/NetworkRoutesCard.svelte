<script lang="ts">
  import type { Network } from "$lib/zerotier/models";

  export let network: Network;
</script>

<div class="rounded-sm border border-zinc-800 bg-zinc-900 p-2">
  <h2 class="font-mono font-semibold uppercase text-orange-500">Routes</h2>
  <table class="text-start">
    <tbody class="divide-y divide-zinc-700">
      {#each network.routes as route}
        {@const { target, via } = route}
        <tr>
          <td class="p-2">
            <code>
              {target}
            </code>
          </td>
          <td class="p-2"><code> -> </code></td>
          <td class="p-2">
            <code>
              {via ?? network.portDeviceName}
            </code>
          </td>
        </tr>
      {:else}
        <tr>
          <td>
            <code>No routes</code>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
