<script lang="ts">
  export let label: string;
  export let value: boolean | undefined;

  $: badgeClass = switchBadgeClass(value);

  function switchBadgeClass(_value: boolean | undefined) {
    switch (_value) {
      case true:
        return "border-green-500 bg-green-700 text-green-100";
      case false:
        return "border-red-500 bg-red-700 text-red-100";
      default:
        return "border-zinc-500 bg-zinc-700 text-zinc-100";
    }
  }
</script>

<div
  class="inline-flex justify-between gap-2 rounded bg-zinc-300 text-center dark:bg-zinc-800"
>
  <span class="ps-2">{label}</span>
  <code
    class="rounded border-2 px-2 font-semibold dark:bg-opacity-75 {badgeClass}"
  >
    {#if value === true}
      ON
    {:else if value === false}
      OFF
    {:else}
      UNKNOWN
    {/if}
  </code>
</div>
