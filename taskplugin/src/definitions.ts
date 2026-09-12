export interface TaskPluginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
