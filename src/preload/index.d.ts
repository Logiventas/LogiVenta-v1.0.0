// preload.d.ts
export {};

declare global {
  interface Window {
    electronAPI: {
      startServer: () => void;
      updateConfig: (key: string, value: any) => Promise<{ success: boolean; SERVER: any }>;
      getConfig: (key: string) => Promise<{ success: boolean; SERVER: any }>;
    };
  }
}
