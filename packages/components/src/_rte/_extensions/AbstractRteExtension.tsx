import { Editor } from "@tiptap/react";

import { RteExtension, RteRenderType } from ".";

export abstract class AbstractRteExtension implements RteExtension {
  constructor(protected editor: Editor) {}

  public abstract apply(): Promise<void>;

  public get renderAs(): RteRenderType {
    return "none";
  }

  public defaultRendererProps = {};

  public render(): JSX.Element {
    return <></>;
  }
}
