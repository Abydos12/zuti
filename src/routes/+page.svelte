<script lang="ts">
  import { nodeStatus } from "$lib/stores";
  import type { PageData } from "./$types";

  export let data: PageData;
  $: nodeStatus.set(data);
</script>

<div>
  <pre><code>{JSON.stringify($nodeStatus, null, 2)}</code></pre>
</div>
