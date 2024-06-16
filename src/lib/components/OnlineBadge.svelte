<script lang="ts">
  export let online: boolean | undefined;
</script>

{#if online === true}
  <code class="rounded bg-green-700 px-2 text-green-200">online</code>
{:else if online === false}
  <code class="rounded bg-red-700 px-2 text-red-200">offline</code>
{:else}
  <code class="rounded bg-zinc-700 px-2">unknown</code>
{/if}
