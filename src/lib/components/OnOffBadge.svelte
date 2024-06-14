<script lang="ts">
  export let label: string;
  export let value: boolean | undefined;
</script>

<div class="inline-flex justify-between gap-2 rounded bg-zinc-800">
  <span class="ps-2">{label}</span>
  {#if value === true}
    <code class="rounded bg-green-700 px-2 text-green-200">ON</code>
  {:else if value === false}
    <code class="rounded bg-red-700 px-2 text-red-200">OFF</code>
  {:else}
    <code class="rounded bg-zinc-700 px-2">Unknown</code>
  {/if}
</div>
