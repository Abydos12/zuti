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
