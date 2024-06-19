<script lang="ts">
  export let online: boolean | undefined;
</script>

{#if online === true}
  <code class="rounded bg-green-700 px-2 font-semibold text-green-100">
    ONLINE
  </code>
{:else if online === false}
  <code class="rounded bg-red-700 px-2 font-semibold text-red-100">
    OFFLINE
  </code>
{:else}
  <code class="rounded bg-zinc-700 px-2 font-semibold"> UNKNOWN </code>
{/if}
