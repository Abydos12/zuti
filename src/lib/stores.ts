import { writable } from "svelte/store";

export const nodeStatus = writable<NodeStatus | undefined>();
