<script lang="ts">
  import OnlineBadge from "$lib/components/OnlineBadge.svelte";
  import OnOffBadge from "$lib/components/OnOffBadge.svelte";

  export let nodeStatus: NodeStatus | undefined;
</script>

<header class="col-span-full flex items-center gap-2 p-2">
  <a
    href="/"
    class="flex flex-col rounded bg-zinc-800 px-2 text-center hover:bg-zinc-700 hover:text-white"
    title="Home"
  >
    <span class="text-2xl leading-none">&#x23c1;</span>
    <code class="text-xs">NODE</code>
  </a>
  <div class="flex flex-col leading-tight">
    <code class="font-bold text-orange-500">ADDRESS</code>
    <code>{nodeStatus?.address}</code>
  </div>
  <span class="flex-1"></span>
  <OnOffBadge label="TCP fallback" value={nodeStatus?.tcpFallbackActive} />
  <OnlineBadge online={nodeStatus?.online} />
</header>
