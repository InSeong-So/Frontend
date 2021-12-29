declare module 'global' {
  export interface IObject {
    [key: string | symbol]: any;
  }
}
