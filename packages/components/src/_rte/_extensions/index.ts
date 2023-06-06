import { ModalProps } from "../../Modal";
import { PopoverProps } from "../../Popover";

/** Implemented extensions */
export type RteExtensionType = "bold" | "italic" | "linker";

/** Whether an extension should render as a visual component, or not at all. */
export type RteRenderType = "none" | "popover" | "modal";

/** Interface for all RTE extensions. */
export interface RteExtension {
  readonly renderAs: RteRenderType;
  readonly defaultRendererProps: Partial<ModalProps | PopoverProps>;

  // The extension rendering workflow :
  /** Let the extension a way to prepare itself before being actually displayed. */
  preRender?: () => Promise<void>;
  /** Renders the extension. */
  render(): JSX.Element;
  /** Let the extension a way to clean itself after being actually displayed. */
  postRender?: () => Promise<void>;

  /** Apply on the embedded editor. */
  apply(): Promise<void>;
}
