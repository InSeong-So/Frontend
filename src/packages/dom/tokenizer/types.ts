import { ATTR_REX } from './regexp';
import { isFillattrsMaker } from './makers';
import { IObject } from 'global';

export class TagStart {
  name: string;
  attributes: IObject;
  constructor(name: string, tag: string) {
    this.name = name;
    this.attributes = this.getAttributes(tag);
  }

  getAttributes(str: string) {
    const attrsMap: IObject = {};
    str.replace(ATTR_REX, (match: any, name: string, ...rest: any[]): any => {
      const args = Array.prototype.slice.call(rest);
      const value = args[0]
        ? args[0]
        : args[1]
        ? args[1]
        : args[2]
        ? args[2]
        : isFillattrsMaker(name)
        ? name
        : '';

      attrsMap[name] = value.replace(/(^|[^\\])"/g, '$1\\"');
    });
    return attrsMap;
  }
}

export class TagEmpty extends TagStart {
  constructor(name: string, tag: string) {
    super(name, tag);
  }
}

export class TagEnd {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

export class Text {
  text: string;
  constructor(text: string) {
    this.text = text;
  }
}
