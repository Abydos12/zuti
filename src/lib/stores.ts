import { derived, readable, writable } from "svelte/store";
import { zerotierApi } from "$lib/zerotier/api";

const REFRESH_INTERVAL = 10_000;

export const networks = readable<Network[]>([] as Network[], (set) => {
  zerotierApi.getAllNetworks().then(set);
  const interval = setInterval(async () => {
    const networks = await zerotierApi.getAllNetworks();
    set(networks);
  }, REFRESH_INTERVAL);

  return () => clearInterval(interval);
});

export const nodeStatus = readable<NodeStatus | undefined>(undefined, (set) => {
  zerotierApi.getStatus().then(set);
  const interval = setInterval(async () => {
    const status = await zerotierApi.getStatus();
    set(status);
  }, REFRESH_INTERVAL);

  return () => clearInterval(interval);
});
