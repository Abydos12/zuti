<script lang="ts">
  import { nodeStatus } from "$lib/stores";
  import OnOffBadge from "$lib/components/OnOffBadge.svelte";
  import NodeListeningOnCard from "$lib/components/node/NodeListeningOnCard.svelte";
  import NodeSurfaceAddressesCard from "$lib/components/node/NodeSurfaceAddressesCard.svelte";
</script>

<div class="flex flex-col gap-2">
  <header class="flex items-center gap-2">
    <h1>Node status</h1>
    <div
      class="inline-flex justify-between gap-2 rounded bg-zinc-300 px-2 dark:bg-zinc-800"
    >
      <span>Planet</span>
      <code class="text-purple-500">
        {$nodeStatus?.planetWorldId}
      </code>
    </div>
  </header>

  <h2>Ports</h2>
  <div class="flex flex-wrap gap-2">
    <div
      class="inline-flex justify-between gap-2 rounded bg-zinc-300 px-2 dark:bg-zinc-800"
    >
      <span>Primary</span>
      <code class="text-orange-500">
        {$nodeStatus?.config.settings.primaryPort}
      </code>
    </div>

    <div
      class="inline-flex justify-between gap-2 rounded bg-zinc-300 px-2 dark:bg-zinc-800"
    >
      <span>Secondary</span>
      <code class="text-orange-500">
        {$nodeStatus?.config.settings.secondaryPort}
      </code>
    </div>

    <div
      class="inline-flex justify-between gap-2 rounded bg-zinc-300 px-2 dark:bg-zinc-800"
    >
      <span>Tertiary</span>
      <code class="text-orange-500">
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

  {#if $nodeStatus}
    <NodeListeningOnCard node={$nodeStatus} />
  {/if}

  {#if $nodeStatus}
    <NodeSurfaceAddressesCard node={$nodeStatus} />
  {/if}
</div>
