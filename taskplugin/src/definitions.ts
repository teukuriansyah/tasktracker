export interface TaskPluginPlugin {
  getLocation(): Promise<{ location: string | string[] }>;
}
