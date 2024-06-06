import type { PageLoad } from "./$types";
import { zerotierApi } from "$lib/zerotier/api";

export const load: PageLoad = async (_) => {
  return {
    nodeStatus: await zerotierApi.getStatus(),
    networks: await zerotierApi.getAllNetworks(),
  };
};
