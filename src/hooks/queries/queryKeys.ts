export const queryKeys = {
  config: {
    get: (key: string) => ['config', key] as const,
    all: ['config', 'all'] as const,
  },
}; 