import { ModalProps } from "../../Modal";
import { PopoverProps } from "../../Popover";

/* Liens utiles TipTap
[GUIDE]  Customiser une extension :             https://tiptap.dev/guide/custom-extensions#name
[API]    Contenu et paramétrage du StarterKit : https://tiptap.dev/api/extensions/starter-kit
[API]    Liste des extensions :                 https://tiptap.dev/api/extensions
[GITHUB] Code source des extensions :           https://github.com/ueberdosis/tiptap/tree/main/packages
*/

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
