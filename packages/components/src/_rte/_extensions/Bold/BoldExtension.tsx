import { AbstractRteExtension } from "../AbstractRteExtension";

export default class BoldExtension extends AbstractRteExtension {
  async apply(): Promise<void> {
    this.editor.chain().focus().toggleBold().run();
  }
}
