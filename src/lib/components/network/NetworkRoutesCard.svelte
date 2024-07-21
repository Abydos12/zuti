<script lang="ts">
  import type { Network } from "$lib/zerotier/models";

  export let network: Network;
</script>

<div
  class="rounded-sm border border-zinc-200 bg-zinc-100 p-2 dark:border-zinc-800 dark:bg-zinc-900"
>
  <h2 class="font-mono font-semibold uppercase text-orange-500">Routes</h2>
  <table class="text-start">
    <tbody class="divide-y divide-zinc-400 dark:divide-zinc-700">
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
