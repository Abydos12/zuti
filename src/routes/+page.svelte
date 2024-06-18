<script lang="ts">
  import { networks, nodeStatus } from "$lib/stores";
  import type { PageData } from "./$types";
  import OnOffBadge from "$lib/components/OnOffBadge.svelte";

  export let data: PageData;
  $: nodeStatus.set(data.nodeStatus);
  $: networks.set(data.networks);
</script>

<div class="flex flex-col gap-2">
  <header class="flex items-center gap-2">
    <h1>Node status</h1>
    <div class="inline-flex justify-between gap-2 rounded bg-zinc-800 px-2">
      <span>Planet</span>
      <code class="text-purple-400">
        {$nodeStatus?.planetWorldId}
      </code>
    </div>
  </header>

  <h2>Ports</h2>
  <div class="flex flex-wrap gap-2">
    <div class="inline-flex justify-between gap-2 rounded bg-zinc-800 px-2">
      <span>Primary</span>
      <code class="text-orange-400">
        {$nodeStatus?.config.settings.primaryPort}
      </code>
    </div>

    <div class="inline-flex justify-between gap-2 rounded bg-zinc-800 px-2">
      <span>Secondary</span>
      <code class="text-orange-400">
        {$nodeStatus?.config.settings.secondaryPort}
      </code>
    </div>

    <div class="inline-flex justify-between gap-2 rounded bg-zinc-800 px-2">
      <span>Tertiary</span>
      <code class="text-orange-400">
        {$nodeStatus?.config.settings.tertiaryPort}
      </code>
    </div>
  </div>

  <h2>TCP Relay</h2>
  <div class="flex flex-wrap gap-2">
    <OnOffBadge
      label="Force TCP relay"
      value={$nodeStatus?.config.settings.forceTcpRelay}
    />
    <OnOffBadge
      label="Allow TCP fallback relay"
      value={$nodeStatus?.config.settings.allowTcpFallbackRelay}
    />
  </div>

  <h2>Listening On</h2>
  <ul class="list-inside list-diamond">
    {#each $nodeStatus?.config.settings.listeningOn || [] as address}
      <li>
        <code>
          <span class="text-teal-400">
            {address.split("/").at(0)}
          </span>
          <span>/</span>
          <span class="text-sky-400">
            {address.split("/").at(1)}
          </span>
        </code>
      </li>
    {:else}
      <span>No networks</span>
    {/each}
  </ul>

  <h2>Surface Addresses</h2>
  <ul class="list-inside list-diamond">
    {#each $nodeStatus?.config.settings.surfaceAddresses || [] as address}
      <li>
        <code>
          <span class="text-teal-400">
            {address.split("/").at(0)}
          </span>
          <span>/</span>
          <span class="text-sky-400">
            {address.split("/").at(1)}
          </span>
        </code>
      </li>
    {:else}
      <span>No networks</span>
    {/each}
  </ul>
</div>
