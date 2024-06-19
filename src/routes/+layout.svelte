<script lang="ts">
  import "../app.css";
  import { nodeStatus, networks } from "$lib/stores";
  import Header from "$lib/components/Header.svelte";

  import type { LayoutData } from "./$types";
  import Footer from "$lib/components/Footer.svelte";
  import SideBar from "$lib/components/SideBar.svelte";

  export let data: LayoutData;
  $: nodeStatus.set(data.nodeStatus);
  $: networks.set(data.networks);
</script>

<Header nodeStatus={$nodeStatus} />

<div class="flex flex-1 overflow-auto">
  <SideBar />
  <main class="flex-1 overflow-auto rounded-s-xl bg-zinc-950 p-2">
    <slot></slot>
  </main>
</div>

<Footer />
