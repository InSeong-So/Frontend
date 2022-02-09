import { AppStorage, AppStorageItem } from 'storage';

const isNull = (value: any) => value === null || value === undefined;

class Storage implements AppStorage {
  state: globalThis.Storage;
  listeners: ((...args: any[]) => any)[];
  constructor() {
    this.state = localStorage;
    this.listeners = [];
  }

  get keys() {
    return Array.from({ length: this.state.length }).map((_, index) => this.state.key(index));
  }

  set(key: string, value: any, isNotify = true) {
    this.setState({ key, value }, isNotify);
  }

  get(key: string) {
    const item = this.state.geAppStorageItem(key) as string;
    return isNull(item) ? [] : JSON.parse(item);
  }

  subscribe(listener: (...args: any[]) => any) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(listener => listener());
  }

  produce(...items: any[]) {
    items.forEach(item =>
      Object.entries(item).forEach(([key, value]) => this.setState({ key, value }, false)),
    );
    this.notify();
  }

  setState({ key, value }: AppStorageItem, isNotify: boolean) {
    this.state.seAppStorageItem(key, JSON.stringify(value));
    if (isNotify) this.notify();
  }
}

export default new Storage();
