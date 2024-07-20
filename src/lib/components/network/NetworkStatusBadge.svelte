<script lang="ts">
  import type { Network } from "$lib/zerotier/models";

  export let status: Network["status"];
</script>

<code
  class="rounded bg-zinc-800 px-2 font-semibold"
  class:text-green-500={status === "OK"}
  class:text-red-500={status !== "OK"}
>
  {status}
</code>
