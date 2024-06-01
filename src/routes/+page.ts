import type { PageLoad } from "./$types";
import { zerotierApi } from "$lib/zerotier/api";

export const load: PageLoad = async (_) => {
  return await zerotierApi.getStatus();
};
