declare module 'storage' {
  export type AppStorageItem = { key: string; value: any };

  export interface AppStorage {
    set: (key: string, value: any, isNotify = true) => void;
    get: (key: string) => any;
    subscribe: (listener: (...args: any[]) => any) => () => void;
    notify: () => void;
    produce: (...args: any[]) => void;
    setState: (newState: AppStorageItem, isNotify: boolean) => void;
  }
}
