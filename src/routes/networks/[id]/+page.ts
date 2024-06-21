import type { PageLoad } from "./$types";
import { zerotierApi } from "$lib/zerotier/api";
import { goto } from "$app/navigation";

export const load: PageLoad = async ({ params }) => {
  const network = await zerotierApi.getNetworkById(params.id);
  console.debug({ network });

  if (!network) {
    await goto("/");
  }

  return { network };
};
