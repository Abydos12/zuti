interface NodeStatus {
  address: string;
  clock: number;
  config: {
    settings: {
      allowManagementFrom: string[];
      allowTcpFallbackRelay: boolean;
      forceTcpRelay: boolean;
      listeningOn: string[];
      portMappingEnabled: boolean;
      primaryPort: number;
      secondaryPort: number;
      softwareUpdate: string;
      softwareUpdateChannel: string;
      surfaceAddresses: string[];
      tertiaryPort: number;
    };
  };
  online: boolean;
  planetWorldId: number;
  planetWorldTimestamp: number;
  publicIdentity: string;
  tcpFallbackActive: boolean;
  version: string;
  versionBuild: number;
  versionMajor: number;
  versionMinor: number;
  versionRev: number;
}

interface Network {
  allowDNS: boolean;
  allowDefault: boolean;
  allowManaged: boolean;
  allowGlobal: boolean;
  assignedAddresses: string[];
  bridge: boolean;
  broadcastEnabled: boolean;
  dns: {
    domain: string;
    servers: string[];
  };
  id: string;
  mac: string;
  mtu: number;
  multicastSubscriptions: {
    adi: number;
    mac: string;
  }[];
  authenticationURL: string;
  authenticationExpiryTime: number;
  name: string;
  netconfRevision: number;
  portDeviceName: string;
  portError: number;
  routes: {
    flags: number;
    metric: number;
    target: string;
    via: string;
  }[];
  status:
    | "REQUESTING_CONFIGURATION"
    | "OK"
    | "ACCESS_DENIED"
    | "NOT_FOUND"
    | "PORT_ERROR"
    | "CLIENT_TOO_OLD"
    | "AUTHENTICATION_REQUIRED";
  type: "PUBLIC" | "PRIVATE";
}
