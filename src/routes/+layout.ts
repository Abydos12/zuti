// Tauri doesn't have a Node.js server to do proper SSR
// so we will use adapter-static to prerender the app (SSG)
// See: https://beta.tauri.app/start/frontend/sveltekit/ for more info
import type { LayoutLoad } from "../../.svelte-kit/types/src/routes/$types";
import { zerotierApi } from "$lib/zerotier/api";

export const ssr = false;

export const load: LayoutLoad = async (_) => {
  return {
    nodeStatus: await zerotierApi.getStatus(),
    networks: await zerotierApi.getAllNetworks(),
  };
};
