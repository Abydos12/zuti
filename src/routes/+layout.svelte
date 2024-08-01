<script lang="ts">
  import "../app.css";
  import { networks, nodeStatus } from "$lib/stores";
  import Header from "$lib/components/core/Header.svelte";

  import Footer from "$lib/components/core/Footer.svelte";
  import SideBar from "$lib/components/core/SideBar.svelte";
</script>

<Header nodeStatus={$nodeStatus} />

<SideBar networks={$networks} />

<main class="flex flex-1 flex-col gap-2 overflow-auto [grid-area:main]">
  <slot />
</main>

<Footer />
