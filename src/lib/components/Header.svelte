<script lang="ts">
  import OnlineBadge from "$lib/components/OnlineBadge.svelte";
  import OnOffBadge from "$lib/components/OnOffBadge.svelte";

  export let nodeStatus: NodeStatus | undefined;
</script>

<header class="col-span-full flex items-center gap-2 p-2">
  <a
    href="/"
    class="rounded bg-zinc-800 px-2 text-2xl hover:bg-zinc-700"
    title="Home"
  >
    <span>&#x23c1;</span>
  </a>
  <a href="/" class="flex flex-col leading-tight">
    <code class="font-bold text-zinc-600">ADDRESS</code>
    <code>{nodeStatus?.address}</code>
  </a>
  <span class="flex-1"></span>
  <OnOffBadge label="TCP fallback" value={nodeStatus?.tcpFallbackActive} />
  <OnlineBadge online={nodeStatus?.online} />
</header>
