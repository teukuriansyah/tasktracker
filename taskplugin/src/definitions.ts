export interface TaskPluginPlugin {
  getLocation(): Promise<{ location: string | string[] }>;
  getData(): Promise<{ data: string }>;
  postData(data:string): Promise<{ message: string }>;
}
