<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";
  import { theme } from "$lib/theme";
</script>

<button class="focus:text-orange-500" onclick={theme.toggle}>
  <Icon name="theme-dark-light" />
</button>
