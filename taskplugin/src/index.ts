import { registerPlugin } from '@capacitor/core';

import type { TaskPluginPlugin } from './definitions';

const TaskPlugin = registerPlugin<TaskPluginPlugin>('TaskPlugin', {
  web: () => import('./web').then((m) => new m.TaskPluginWeb()),
});

export * from './definitions';
export { TaskPlugin };
