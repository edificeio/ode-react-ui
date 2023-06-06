import { AbstractRteExtension } from "../AbstractRteExtension";

export default class ItalicExtension extends AbstractRteExtension {
  async apply(): Promise<void> {
    this.editor.chain().focus().toggleItalic().run();
  }
}
