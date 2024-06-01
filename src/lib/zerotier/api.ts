import { getZerotierServiceToken } from "$lib/commands";
import { fetch } from "@tauri-apps/plugin-http";

class ZerotierApiClient {
  private service_token: string | undefined;

  async getStatus() {
    const response = await this.request("status");
    return (await response.json()) as NodeStatus;
  }

  private url(endpoint: string): string {
    return `http://localhost:9993/${endpoint}`;
  }

  private async request(endpoint: string) {
    if (!this.service_token) {
      this.service_token = await getZerotierServiceToken();
    }

    return await fetch(this.url(endpoint), {
      headers: { "X-ZT1-Auth": this.service_token },
    });
  }
}

export const zerotierApi = new ZerotierApiClient();
