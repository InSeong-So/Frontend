declare module 'Component' {
  export type ComponentProps = { [key: string]: undefined };
  export type Presentation = (...args: ComponentProps[]) => string;
}
