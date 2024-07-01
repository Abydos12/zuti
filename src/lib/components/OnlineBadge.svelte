<script lang="ts">
  export let online: boolean | undefined;

  $: statusText =
    online === true ? "ONLINE" : online === false ? "OFFLINE" : "UNKNOWN";

  $: badgeClass =
    online === true
      ? "border-green-500 bg-green-700 text-green-100"
      : online === false
        ? "border-red-500 bg-red-700 text-red-100"
        : "bg-zinc-700 border-zinc-500";
</script>

<code class="rounded border-2 bg-opacity-50 px-2 font-semibold {badgeClass}">
  {statusText}
</code>
