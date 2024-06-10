<script lang="ts">
  export let nodeStatus: NodeStatus | undefined;
</script>

<header class="col-span-full flex items-center gap-2 p-2 dark:bg-zinc-800">
  <a
    href="/"
    class="rounded border-2 px-2 text-2xl hover:border-orange-500 hover:bg-orange-700 dark:border-zinc-700 dark:bg-zinc-900"
  >
    <span> &#x23c1;</span>
  </a>
  <a href="/">Address: <code>{nodeStatus?.address}</code></a>
  <span class="flex-1"></span>
  <div class="flex gap-2 rounded bg-zinc-900">
    <span class="ps-2">TCP fallback</span>
    {#if nodeStatus?.tcpFallbackActive === true}
      <code class="rounded bg-green-700 px-2 text-green-200">ON</code>
    {:else if nodeStatus?.tcpFallbackActive === false}
      <code class="rounded bg-red-700 px-2 text-red-200">OFF</code>
    {:else}
      <code class="rounded bg-zinc-700 px-2">unknown</code>
    {/if}
  </div>
  {#if nodeStatus?.online === true}
    <code class="rounded bg-green-700 px-1 text-green-200">online</code>
  {:else if nodeStatus?.online === false}
    <code class="rounded bg-red-700 px-1 text-red-200">offline</code>
  {:else}
    <code class="rounded bg-zinc-700 px-1">unknown</code>
  {/if}
</header>
