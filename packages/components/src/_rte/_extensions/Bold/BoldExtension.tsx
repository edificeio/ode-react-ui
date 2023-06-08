import { AbstractRteExtension } from "../AbstractRteExtension";

export default class BoldExtension extends AbstractRteExtension {
  apply(): boolean {
    return this.editor.chain().focus().toggleBold().run();
  }
}
