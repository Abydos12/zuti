<script lang="ts">
  import OnlineBadge from "$lib/components/OnlineBadge.svelte";
  import OnOffBadge from "$lib/components/OnOffBadge.svelte";
  import type { NodeStatus } from "$lib/zerotier/models";
  import Icon from "$lib/components/Icon.svelte";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";

  export let nodeStatus: NodeStatus | undefined;
</script>

<header
  class="flex items-center gap-2 rounded bg-zinc-100 p-2 [grid-area:header] dark:bg-zinc-900"
>
  <a
    href="/"
    class="flex flex-col rounded-sm bg-zinc-200 px-2 text-center hover:bg-zinc-300 dark:bg-zinc-800 hover:dark:bg-zinc-700 hover:dark:text-white"
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
  <ThemeToggle />
</header>
