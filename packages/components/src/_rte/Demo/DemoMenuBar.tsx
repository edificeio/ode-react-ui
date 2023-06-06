import { useState } from "react";

import { Editor } from "@tiptap/react";
import clsx from "clsx";

import { Modal, ModalProps } from "../../Modal";
import { Popover, PopoverProps } from "../../Popover";
import { RteExtension, RteExtensionType } from "../_extensions";
import BoldExtension from "../_extensions/Bold/BoldExtension";
import ItalicExtension from "../_extensions/Italic/ItalicExtension";
import LinkerExtension from "../_extensions/Linker/LinkerExtension";

export interface DemoMenuBarProps {
  /** Attach the bar to this rich text editor instance. */
  editor: Editor;
  /** List of extensions to instanciate. */
  extensions: Array<RteExtensionType>;
}

/** Internal representation of the available extensions. */
type ExtensionCatalog = {
  [type in RteExtensionType]?: {
    extension: RteExtension;
    isActive: () => boolean;
  };
};

const DemoMenuBar = ({ editor, extensions }: DemoMenuBarProps) => {
  // Initialization function
  const defaultCatalog = (list: Array<RteExtensionType>): ExtensionCatalog => {
    const exts = {} as ExtensionCatalog;

    list.forEach((type) => {
      switch (type) {
        case "bold":
          exts[type] = {
            extension: new BoldExtension(editor),
            isActive: () => editor.isActive("bold"),
          };
          break;
        case "italic":
          exts[type] = {
            extension: new ItalicExtension(editor),
            isActive: () => editor.isActive("italic"),
          };
          break;
        case "linker":
          exts[type] = {
            extension: new LinkerExtension(editor),
            isActive: () => false, //TODO
          };
          break;
        default:
          break;
      }
    });

    return exts;
  };

  const [exts, setExtensions] = useState<ExtensionCatalog>(
    defaultCatalog(extensions),
  );

  // Hook to render an extension in a popover
  const [extPopoverProps, setExtPopoverProps] = useState<PopoverProps>({
    isVisible: false,
    children: <></>,
  });

  // Hook to render an extension in a modal
  const [extModalProps, setModalProps] = useState<ModalProps>({
    id: "extModal",
    isOpen: false,
    onModalClose: () => {
      setModalProps({ ...extModalProps, isOpen: false });
    },
    children: <></>,
  });

  const handleActive = (type: RteExtensionType) =>
    exts[type]?.isActive?.() ? "active" : undefined;

  const handleActivatePlugin = async (
    type: RteExtensionType,
    button: HTMLButtonElement,
  ) => {
    const ext = exts[type]?.extension;
    if (!ext) return;
    try {
      switch (ext.renderAs) {
        case "modal":
          {
            if (ext.preRender) await ext.preRender();
            const defaultProps = Object.assign(
              {},
              ext.defaultRendererProps,
              extModalProps,
            );
            setModalProps({
              ...defaultProps,
              isOpen: true,
              children: ext.render(),
            });
            if (ext.postRender) await ext.postRender();
          }
          break;

        // TODO case "popover":

        default:
          ext.apply();
          break;
      }
    } catch {
      alert("Cannot apply this !");
    }
  };

  return (
    <>
      <div>
        {extensions.map((type) => (
          <button
            type="button"
            data-bs-toggle="button"
            className={clsx("btn btn-tertiary outline", handleActive(type))}
            onClick={(e) =>
              handleActivatePlugin(type, e.target as HTMLButtonElement)
            }
          >
            {type}
          </button>
        ))}
      </div>

      {extPopoverProps.isVisible && <Popover {...extPopoverProps}></Popover>}

      {extModalProps.isOpen && <Modal {...extModalProps}></Modal>}
    </>
  );
};

DemoMenuBar.displayName = "DemoMenuBar";
export default DemoMenuBar;