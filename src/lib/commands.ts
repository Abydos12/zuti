import { invoke } from "@tauri-apps/api/core";

export async function get_zerotier_service_token() {
  return await invoke<string>("get_zerotier_service_token");
}
