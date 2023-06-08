import { ElementType } from "react";

import { ModalProps } from "../../Modal";
import { PopoverProps } from "../../Popover";

/* Liens utiles TipTap
[GUIDE]  Customiser une extension :             https://tiptap.dev/guide/custom-extensions#name
[API]    Contenu et paramétrage du StarterKit : https://tiptap.dev/api/extensions/starter-kit
[API]    Liste des extensions :                 https://tiptap.dev/api/extensions
[GITHUB] Code source des extensions :           https://github.com/ueberdosis/tiptap/tree/main/packages
*/

/** Available extensions */
export type RteExtensionType = "bold" | "italic" | "linker";

/** Whether an extension should render as a visual component, or not at all. */
export type RteRenderType = "none" | "popover" | "modal";

// TODO create a TipTap context to share editor + tiptap (+their configuration) extensions with React components.

/** Interface for all RTE extensions. */
export interface RteExtension {
  /** Apply command on the embedded editor. */
  apply(): Promise<void>;
}

/** Any RTE extension that has an UI must implement this interface. */
export interface RteRenderedExtension extends RteExtension {
  readonly renderAs:RteRenderType;

  // The extension rendering workflow :
  /** Let the extension a way to prepare itself before being actually displayed. */
  preRender?: () => Promise<void>;
  /** Renders the extension. */
  render( props?:RteModalProps|RtePopoverProps ): JSX.Element;
  /** Let the extension a way to clean itself after being actually displayed. */
  postRender?: () => Promise<void>;
}

export type RteModalProps = Partial<ModalProps> & {
  /** Callback when the user validates the modal. */
  onOk: () => Promise<void>;
  /** Callback when the user closes the modal, without validating. */
  onCancel: () => Promise<void>;
};

export type RtePopoverProps = Partial<PopoverProps> & {
  /** Callback when the user validates the modal. */
  onOk: () => Promise<void>;
  //TODO ...design and implement...
};
