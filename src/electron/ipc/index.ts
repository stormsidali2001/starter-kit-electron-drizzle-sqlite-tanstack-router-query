import { registerConfigHandlers } from './config.ipc.js';

// Minimal IPC registration for starter kit
export function registerIpcHandlers() {
  registerConfigHandlers();
} 