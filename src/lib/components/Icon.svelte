<script lang="ts">
  import { icons } from "$lib/constants";

  export let name: keyof typeof icons;

  $: icon = icons[name];
</script>

<svg
  viewBox={icon.viewBox}
  class="h-6 w-6 fill-current"
  xmlns="http://www.w3.org/2000/svg"
>
  {@html icon.svg}
</svg>
