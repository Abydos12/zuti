<script lang="ts">
  export let label: string;
  export let value: boolean | undefined;
</script>

<div class="inline-flex justify-between gap-2 rounded bg-zinc-800 text-center">
  <span class="ps-2">{label}</span>
  {#if value === true}
    <code
      class="rounded border-2 border-green-500 bg-green-700 bg-opacity-50 px-2 font-semibold text-green-100"
    >
      ON
    </code>
  {:else if value === false}
    <code
      class="rounded border-2 border-red-500 bg-red-700 bg-opacity-50 px-2 font-semibold text-red-100"
    >
      OFF
    </code>
  {:else}
    <code class="rounded bg-zinc-700 px-2 font-semibold">Unknown</code>
  {/if}
</div>
