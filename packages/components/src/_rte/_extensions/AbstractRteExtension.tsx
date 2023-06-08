import { Editor } from "@tiptap/react";

import { RteExtension } from ".";

//-------------------------------------------------
export abstract class AbstractRteExtension implements RteExtension {
  constructor(protected editor: Editor) {}

  public abstract apply(): Promise<void>;
}
