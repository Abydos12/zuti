<script lang="ts">
  import "../app.css";
  import { networks, nodeStatus } from "$lib/stores";
  import Header from "$lib/components/Header.svelte";

  import Footer from "$lib/components/Footer.svelte";
  import SideBar from "$lib/components/SideBar.svelte";
</script>

<Header nodeStatus={$nodeStatus} />

<SideBar networks={$networks} />

<main class="flex flex-1 flex-col gap-2 overflow-auto bg-zinc-950">
  <slot />
</main>

<Footer />
