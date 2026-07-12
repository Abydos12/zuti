<script lang="ts">
  interface Props {
    online: boolean | undefined;
  }

  let { online }: Props = $props();

  function switchBadgeClass(_online: boolean | undefined) {
    switch (_online) {
      case true:
        return "border-green-500 bg-green-700 text-green-100";
      case false:
        return "border-red-500 bg-red-700 text-red-100";
      default:
        return "border-zinc-500 bg-zinc-700 text-zinc-100";
    }
  }
  let statusText = $derived(
    online === true ? "ONLINE" : online === false ? "OFFLINE" : "UNKNOWN",
  );
  let badgeClass = $derived(switchBadgeClass(online));
</script>

<code
  class="rounded-sm border-2 px-2 font-semibold dark:bg-opacity-75 {badgeClass}"
>
  {statusText}
</code>
