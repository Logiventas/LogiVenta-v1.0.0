// preload.d.ts
export {};

declare global {
  interface Window {
    electronAPI: {
      startServer: () => void;
    }
  }
}
