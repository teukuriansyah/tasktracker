import { WebPlugin } from '@capacitor/core';

import type { TaskPluginPlugin } from './definitions';

export class TaskPluginWeb extends WebPlugin implements TaskPluginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
