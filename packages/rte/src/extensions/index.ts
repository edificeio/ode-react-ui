/* Liens utiles TipTap
[GUIDE]  Customiser une extension :             https://tiptap.dev/guide/custom-extensions#name
[API]    Contenu et paramétrage du StarterKit : https://tiptap.dev/api/extensions/starter-kit
[API]    Liste des extensions :                 https://tiptap.dev/api/extensions
[GITHUB] Code source des extensions :           https://github.com/ueberdosis/tiptap/tree/main/packages
*/

import { ModalProps, PopoverProps } from "@ode-react-ui/components";

/** Available extensions */
export type RteExtensionType = "bold" | "italic" | "linker";

// TODO create a TipTap context to share editor + tiptap (+their configuration) extensions with React components.

/** Interface for all RTE extensions. */
export interface RteExtension {
  /** Apply command on the embedded editor. */
  apply(): boolean;
}

/** Where to render an RteRenderedExtension. */
export type RteRenderType = "popover" | "modal";

/** Any RTE extension that comes with an UI must implement this interface. */
export interface RteRenderedExtension extends RteExtension {
  readonly renderAs: RteRenderType;

  // The extension rendering workflow :
  /** Let the extension a way to prepare itself before being actually displayed. */
  preRender?: () => Promise<void>;
  /** Renders the extension. */
  render(props?: RteModalProps | RtePopoverProps): JSX.Element;
  /** Let the extension a way to clean itself after being actually displayed. */
  postRender?: () => Promise<void>;
}

/** Utility function to check if an object is implements the RteRenderedExtension interface. */
export function instanceofRteRenderedExtension(
  arg: any,
): arg is RteRenderedExtension {
  return arg && arg.renderAs && typeof arg.renderAs === "string";
}

export type RteModalProps = Partial<ModalProps> & {
  /** Callback when the user validates the modal. */
  onOk: () => void;
  /** Callback when the user closes the modal, without validating. */
  onCancel: () => void;
};

export type RtePopoverProps = Partial<PopoverProps> & {
  /** Callback when the user validates the modal. */
  onOk: () => void;
  //TODO ...design and implement...
};
