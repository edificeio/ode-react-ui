import { AbstractRteExtension } from "../AbstractRteExtension";

export default class ItalicExtension extends AbstractRteExtension {
  apply(): boolean {
    return this.editor.chain().focus().toggleItalic().run();
  }
}
