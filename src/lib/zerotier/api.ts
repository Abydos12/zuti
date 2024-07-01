import { getZerotierServiceToken } from "$lib/commands";
import { fetch } from "@tauri-apps/plugin-http";
import type { Network, NetworkUpdate, NodeStatus } from "$lib/zerotier/models";

class ZerotierApiClient {
  private service_token: string | undefined;

  async getStatus(): Promise<NodeStatus> {
    const response = await this.request("status");
    return await response.json();
  }

  async getAllNetworks(): Promise<Network[]> {
    const response = await this.request("network");
    return await response.json();
  }

  async getNetworkById(id: string): Promise<Network | undefined> {
    const response = await this.request(`network/${id}`);
    if (response.ok) {
      return await response.json();
    }
  }

  async joinNetwork(
    id: string,
    config: Pick<
      Network,
      "allowManaged" | "allowGlobal" | "allowDefault" | "allowDNS"
    >,
  ): Promise<Network> {
    const response = await this.request(`network/${id}`, "POST", config);
    return await response.json();
  }

  async updateNetwork(id: string, options: NetworkUpdate): Promise<Network> {
    const response = await this.request(`network/${id}`, "POST", options);
    return await response.json();
  }

  async leaveNetwork(id: string): Promise<{ result: boolean }> {
    const response = await this.request(`network/${id}`, "DELETE");
    return await response.json();
  }

  private url(endpoint: string): string {
    return `http://localhost:9993/${endpoint}`;
  }

  private async request(
    endpoint: string,
    method: string = "GET",
    body?: object,
  ): Promise<Response> {
    if (!this.service_token) {
      this.service_token = await getZerotierServiceToken();
    }

    const config: RequestInit = {
      method,
      headers: { "X-ZT1-Auth": this.service_token },
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    return await fetch(this.url(endpoint), config);
  }
}

export const zerotierApi = new ZerotierApiClient();
