import type { PageLoad } from "./$types";
import { zerotierApi } from "$lib/zerotier/api";

export const load: PageLoad = async ({ params }) => {
  return {
    network: await zerotierApi.getNetworkById(params.id),
  };
};
