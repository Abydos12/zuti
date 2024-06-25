<script lang="ts">
  import { zerotierApi } from "$lib/zerotier/api";
  import { networkIdPattern } from "$lib/patterns";
  import { goto } from "$app/navigation";
  import { writable } from "svelte/store";

  const networkSettings = {
    allowManaged: true,
    allowGlobal: false,
    allowDefault: false,
    allowDNS: false,
  };

  const loading = writable(false);

  let networkId: string = "";

  async function joinNetwork() {
    loading.set(true);
    try {
      await zerotierApi.joinNetwork(networkId, networkSettings);
      goto(networkId);
    } catch (error) {
      console.log(error);
    } finally {
      loading.set(false);
    }
  }
</script>

{#if $loading}
  <div class="m-auto">Loading...</div>
{:else}
  <form
    class="m-4 flex flex-col items-center gap-4"
    on:submit|preventDefault={() => joinNetwork()}
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
    <button
      type="submit"
      class="rounded-sm bg-zinc-800 px-4 py-1 hover:bg-zinc-700 hover:text-white"
    >
      Join
    </button>

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
{/if}
