import type { PageLoad } from "./$types";
import { zerotierApi } from "$lib/zerotier/api";
import { goto } from "$app/navigation";

export const load: PageLoad = async ({
  params,
}): Promise<{ network: Network }> => {
  const network = await zerotierApi.getNetworkById(params.id);

  if (!network) {
    await goto("/");
  }
  // @ts-ignore
  return { network };
};
