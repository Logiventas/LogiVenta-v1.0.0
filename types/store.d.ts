declare module 'electron-store' {
  interface ElectronStore<T> {
    get(key: string): T | undefined;
    set(key: string, value: T): void;
  }

  const ElectronStore: {
    new <T>(options?: any): ElectronStore<T>;
  };

  export = ElectronStore;
}
