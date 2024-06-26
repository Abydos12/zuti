import type { PageLoad } from "./$types";
import { zerotierApi } from "$lib/zerotier/api";
import { goto } from "$app/navigation";

export const load: PageLoad = async ({ params }) => {
  const network = await zerotierApi.getNetworkById(params.id);

  if (network) {
    return { network };
  }

  await goto("/");
};
