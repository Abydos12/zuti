<script lang="ts">
  import type { Network } from "$lib/zerotier/models";

  export let status: Network["status"];

  $: badgeClass = switchClass(status);

  function switchClass(s: Network["status"]): string {
    switch (s) {
      case "OK":
        return "bg-green-200 text-green-600 border-green-600 dark:bg-green-800/25 dark:text-green-500 border-green-800";
      default:
        return "bg-red-200 text-red-600 border-red-600 dark:bg-red-800/25 dark:text-red-500 dark:border-red-800";
    }
  }
</script>

<code class="rounded-sm border px-2 font-semibold {badgeClass}">
  {status}
</code>
