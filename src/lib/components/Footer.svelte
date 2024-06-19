<script>
  import { nodeStatus } from "$lib/stores";
  import { getTauriVersion, getVersion } from "@tauri-apps/api/app";
</script>

<footer class="flex justify-between p-2">
  <span>Zerotier: <code>{$nodeStatus?.version}</code></span>
  {#await getTauriVersion() then tauriVersion}
    <span>Tauri: <code>{tauriVersion}</code></span>
  {/await}
  {#await getVersion() then appVersion}
    <span>Zuti: <code>{appVersion}</code></span>
  {/await}
</footer>
