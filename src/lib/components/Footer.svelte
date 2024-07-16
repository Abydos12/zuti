<script>
  import { nodeStatus } from "$lib/stores";
  import { getTauriVersion, getVersion } from "@tauri-apps/api/app";
</script>

<footer class="flex justify-between rounded bg-zinc-900 p-2">
  <span>Zerotier: <code>{$nodeStatus?.version}</code></span>
  {#await getTauriVersion() then tauriVersion}
    <span>Tauri: <code>{tauriVersion}</code></span>
  {/await}
  {#await getVersion() then appVersion}
    <span>Zuti: <code>{appVersion}</code></span>
  {/await}
</footer>

<style>
  footer {
    grid-area: 3 / 2 / 4 / 4;
  }
</style>
