import { Editor } from "@tiptap/react";

import { RteExtension } from "..";

export class BoldExtension implements RteExtension {
  constructor(private editor: Editor) {}
  async apply(): Promise<void> {
    this.editor.chain().focus().toggleBold().run();
  }
}
