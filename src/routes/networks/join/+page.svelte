<script lang="ts">
  import { zerotierApi } from "$lib/zerotier/api";
  import { networkIdPattern } from "$lib/patterns";

  const networkSettings = {
    allowManaged: true,
    allowGlobal: false,
    allowDefault: false,
    allowDNS: false,
  };

  let networkId: string = "";

  function joinNetwork() {
    zerotierApi
      .joinNetwork(networkId, networkSettings)
      .then(console.debug)
      .catch(console.error);
  }
</script>

<form
  class="m-4 flex flex-col items-center gap-4"
  on:submit|preventDefault={joinNetwork}
>
  <input
    type="text"
    pattern={networkIdPattern}
    required
    placeholder={"#".repeat(16)}
    size="16"
    name="networkId"
    bind:value={networkId}
  />
  <button type="submit">Join</button>

  <div class="flex flex-wrap gap-8">
    <label class="flex items-center gap-2">
      <input type="checkbox" bind:checked={networkSettings.allowManaged} />
      Allow Managed
    </label>

    <label class="flex items-center gap-2">
      <input type="checkbox" bind:checked={networkSettings.allowGlobal} />
      Allow Global
    </label>

    <label class="flex items-center gap-2">
      <input type="checkbox" bind:checked={networkSettings.allowDefault} />
      Allow Default
    </label>

    <label class="flex items-center gap-2">
      <input type="checkbox" bind:checked={networkSettings.allowDNS} />
      Allow DNS
    </label>
  </div>
</form>
