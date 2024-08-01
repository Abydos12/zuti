<script lang="ts">
  export let addresses: string[] = [];

  // group ports by ip
  $: group = addresses.reduce(
    (acc, address) => {
      const [ip, port] = address.split("/");
      if (!(ip in acc)) {
        acc[ip] = [];
      }
      acc[ip].push(port);
      return acc;
    },
    {} as { [ip: string]: string[] },
  );
</script>

<ul class="flex flex-wrap gap-2">
  {#each Object.entries(group) as [ip, ports]}
    <li
      class="flex items-center gap-2 rounded-sm border border-zinc-300 bg-zinc-200 p-2 dark:border-zinc-600 dark:bg-zinc-800"
    >
      <code class="text-teal-600 dark:text-teal-400">
        {ip}
      </code>
      <div class="h-full border border-zinc-300 dark:border-zinc-600"></div>
      <code class="text-sky-600 dark:text-sky-400">
        {#each ports as port}
          {port}<br />
        {/each}
      </code>
    </li>
  {:else}
    <code>No addresses</code>
  {/each}
</ul>
