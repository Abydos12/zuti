<script lang="ts">
  import { networks, nodeStatus } from "$lib/stores";
  import type { PageData } from "./$types";

  export let data: PageData;
  $: nodeStatus.set(data.nodeStatus);
  $: networks.set(data.networks);
</script>

<h1>Zerotier config</h1>

<ul class="border-2 dark:border-zinc-500 dark:bg-zinc-800">
  Ports
  <li>
    Primary: {$nodeStatus?.config.settings.primaryPort}
  </li>
  <li>
    Secondary: {$nodeStatus?.config.settings.secondaryPort}
  </li>
  <li>
    Tertiary: {$nodeStatus?.config.settings.tertiaryPort}
  </li>
</ul>
