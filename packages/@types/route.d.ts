declare module 'route' {
  export type HashRouteCallback = (params: string) => void;

  export interface RoutesProps {
    testRegExp: RegExp;
    path: string;
    targetComponent: HashRouteCallback;
  }

  export interface RouterParams {
    global: Window;
    tag: 'button' | 'a';
    dataset: string;
  }
}
