<script lang="ts">
  export let value: boolean | undefined;
</script>

<button class="inline-flex justify-between rounded dark:bg-zinc-800" on:click>
  <code
    class="rounded px-2"
    class:bg-green-700={value}
    class:text-green-200={value}>ON</code
  >
  <code
    class="rounded px-2"
    class:bg-red-700={!value}
    class:text-red-200={!value}>OFF</code
  >
</button>
