import { writable } from "svelte/store";

export const nodeStatus = writable<NodeStatus | undefined>();
export const networks = writable<Network[]>([]);
