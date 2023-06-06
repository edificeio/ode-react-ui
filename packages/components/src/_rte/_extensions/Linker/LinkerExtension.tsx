import { RteRenderType } from "..";
import { Linker, LinkerProps } from "../../../_widgets/Linker";
import { ModalProps } from "../../../Modal";
import { AbstractRteExtension } from "../AbstractRteExtension";

export interface LinkerExtensionProps extends LinkerProps {
  /**
   * Dummy
   */
  dummy?: string;
}

export default class LinkerExtension extends AbstractRteExtension {
  private renderedProps: LinkerProps = {
    types: ["search", "external"],
    target: undefined,
  };

  async apply(): Promise<void> {
    this.editor.chain().focus().toggleBold().run();
  }

  public get renderAs(): RteRenderType {
    return "modal";
  }

  public readonly defaultRendererProps: Partial<ModalProps> = {
    size: "xl",
  };

  public async preRender(): Promise<void> {
    //this.editor.
  }

  public render(): JSX.Element {
    return <Linker {...this.renderedProps} />;
  }
}
