declare module 'dom' {
  export type DiffRender = (
    $element: HTMLElement,
    realNode: HTMLElement,
    virtualNode: HTMLElement,
  ) => void | undefined;
  export type NodeCompare = ($oldNode: HTMLElement, $newNode: HTMLElement) => boolean;
  export type AttributeCompare = (
    node1: HTMLElement,
    node2: HTMLElement,
    name1: string,
    name2: string,
  ) => boolean;

  export type Attributes = StringObject;
  export type NodeEvent = { type: string; cb: (...args: any[]) => any };
  export type Node = {
    type: 'Root' | 'Element' | 'Text';
    tagName: string;
    attributes: Attributes;
    content: string;
    children: Partial<Node>[];
    events: NodeEvent[];
  };
  export type TagRoot = { tag: 'Root'; children: object[] };
  export type TagText = { type: 'Text'; content: string };
  export type Tokens = TagStart | EmptyTag | TagEnd | TextNode | TagToken | TagText;
  export type TagToken = { name: string; attributes: Attributes };
  export type TextToken = { text: string };

  export interface EventHandlerProps extends HTMLElement {
    key: string;
  }
  export type MouseEvent = MouseEvent & { target: HTMLButtonElement };
}
