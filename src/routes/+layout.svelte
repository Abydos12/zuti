<script lang="ts">
  import "../app.css";
  import { nodeStatus, networks } from "$lib/stores";
  import { getTauriVersion, getVersion } from "@tauri-apps/api/app";
</script>

<header class="col-span-full flex p-2 dark:bg-zinc-800">
  &#x23c1;
  <a href="/">Address: <code>{$nodeStatus?.address}</code></a>
  <span class="flex-1"></span>
  {#if $nodeStatus}
    <code class="rounded bg-green-700 px-1 text-green-200">online</code>
  {:else}
    <code class="rounded bg-red-700 px-1 text-red-200">offline</code>
  {/if}
</header>

<div class="flex flex-1 overflow-auto">
  <nav class="min-w-40 border-e-2 dark:border-zinc-500">
    <ul class="dark:bg-zinc-900">
      {#each $networks as network}
        <li class="p-2">
          <a href={`/networks/${network.id}`}>
            <div>{network.name}</div>
            <code class="text-zinc-500">{network.id}</code>
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
