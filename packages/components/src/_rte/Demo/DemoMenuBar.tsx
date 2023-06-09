import { useState } from "react";

import { Editor } from "@tiptap/react";
import clsx from "clsx";

import { Modal, ModalProps } from "../../Modal";
import { Popover, PopoverProps } from "../../Popover";
import {
  RteExtension,
  RteRenderedExtension,
  RteExtensionType,
  instanceofRteRenderedExtension,
} from "../_extensions";
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
            extension: new BoldExtension(editor), // TODO optim de la RAM : instancier uniquement à l'usage ?
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
            isActive: () => editor.isActive("linker"),
          };
          break;
        default:
          break;
      }
    });

    return exts;
  };

  const modalDefaults = {
    id: "extModal",
    isOpen: false,
    onModalClose: () => {
      setModalProps({ ...extModalProps, isOpen: false, children: <></> });
    },
    children: <></>,
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
  const [extModalProps, setModalProps] = useState<ModalProps>(modalDefaults);

  const doApply = (ext: RteExtension) => {
    try {
      if (ext.apply() && instanceofRteRenderedExtension(ext)) {
        // Reset the renderer
        switch (ext.renderAs) {
          case "modal":
            setModalProps(modalDefaults);
            break;

          // TODO case "popover":

          default:
            break;
        }
      }
    } catch (e) {
      console.log("Cannot apply this extension !");
    }
  };
  const doRender = async (ext: RteRenderedExtension) => {
    try {
      switch (ext.renderAs) {
        case "modal":
          {
            // The "modal" rendering flow
            if (ext.preRender) await ext.preRender();
            setModalProps({
              ...extModalProps,
              isOpen: true,
              children: ext.render({
                onCancel: extModalProps.onModalClose,
                onOk: () => {
                  doApply(ext);
                },
              }),
            });
            if (ext.postRender) await ext.postRender();
          }
          break;

        // TODO case "popover":

        default:
          throw "Unkowwn extension type";
      }
    } catch (e) {
      console.log("Cannot render this extension !");
    }
  };

  const getButtonClass = (type: RteExtensionType) =>
    clsx(
      "btn btn-tertiary outline",
      exts[type]?.isActive?.() ? "active" : undefined,
    );

  const handlePlugin = async (
    type: RteExtensionType,
    button: HTMLButtonElement,
  ) => {
    const ext = exts[type]?.extension;
    if (!ext) return;

    if (!Object.prototype.hasOwnProperty.call(ext, "renderAs")) {
      return doApply(ext);
    } else {
      return doRender(ext as RteRenderedExtension);
    }
  };

  return (
    <>
      <div>
        {extensions.map((type) => (
          <button
            type="button"
            data-bs-toggle="button"
            className={getButtonClass(type)}
            onClick={(e) => handlePlugin(type, e.target as HTMLButtonElement)}
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
