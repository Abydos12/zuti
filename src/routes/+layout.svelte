<script lang="ts">
  import "../app.css";
  import { nodeStatus, networks } from "$lib/stores";
  import { getTauriVersion, getVersion } from "@tauri-apps/api/app";
  import Header from "$lib/components/Header.svelte";

  import type { LayoutData } from "./$types";

  export let data: LayoutData;
  $: nodeStatus.set(data.nodeStatus);
  $: networks.set(data.networks);
</script>

<Header nodeStatus={$nodeStatus} />

<div class="flex flex-1 overflow-auto">
  <nav class="min-w-40 border-e-2 dark:border-zinc-800">
    <ul>
      {#each $networks as network}
        <li
          class="m-2 rounded border-2 p-2 hover:border-orange-500 dark:border-zinc-700 dark:bg-zinc-900"
        >
          <a href={`/networks/${network.id}`}>
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
        </li>
      {:else}
        <span>No networks</span>
      {/each}
    </ul>
  </nav>

  <main class="flex-1 overflow-auto p-2">
    <slot></slot>
  </main>
</div>

<footer class="flex justify-between p-2 dark:bg-zinc-800">
  <span>Zerotier: <code>{$nodeStatus?.version}</code></span>
  {#await getTauriVersion() then tauriVersion}
    <span>Tauri: <code>{tauriVersion}</code></span>
  {/await}
  {#await getVersion() then appVersion}
    <span>Zuti: <code>{appVersion}</code></span>
  {/await}
</footer>

<style></style>
