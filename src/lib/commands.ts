import { invoke } from "@tauri-apps/api/core";

export async function getZerotierServiceToken() {
  return await invoke<string>("get_zerotier_service_token");
}
