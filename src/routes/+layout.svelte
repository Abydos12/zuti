<script lang="ts">
  import "../app.css";
  import { nodeStatus } from "$lib/stores";
  import { getTauriVersion, getVersion } from "@tauri-apps/api/app";
</script>

<header class="bg-zinc-800 p-2">
  Address: <code>{$nodeStatus?.address}</code>
</header>

<main class="flex-1 overflow-auto">
  <slot></slot>
</main>

<footer class="bg-zinc-800 p-2">
  <span>Zerotier: <code>{$nodeStatus?.version}</code></span>
  {#await getTauriVersion() then tauriVersion}
    <!-- promise was fulfilled or not a Promise -->
    <span>Tauri: <code>{tauriVersion}</code></span>
  {/await}
  {#await getVersion() then appVersion}
    <!-- promise was fulfilled or not a Promise -->
    <span>Zuti: <code>{appVersion}</code></span>
  {/await}
</footer>

<style></style>
