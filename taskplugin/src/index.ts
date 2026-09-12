import { registerPlugin } from '@capacitor/core';

import type { TaskPluginPlugin } from './definitions';

const TaskPlugin = registerPlugin<TaskPluginPlugin>('TaskPlugin');

export * from './definitions';
export { TaskPlugin };
