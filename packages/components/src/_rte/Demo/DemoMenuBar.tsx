import { useState } from "react";

import { Editor } from "@tiptap/react";

import { RteExtension } from "../_extensions";
import { BoldExtension } from "../_extensions/Bold/BoldExtension";
import { RteExtensionType } from "./DemoEditor";

export interface DemoMenuBarProps {
  /** Attach the bar to this rich text editor instance. */
  editor: Editor;
  /** List of extensions to instanciate. */
  extensions: Array<RteExtensionType>;
}

type ExtensionCatalog = { [type in RteExtensionType]?: RteExtension };

const DemoMenuBar = ({ editor, extensions }: DemoMenuBarProps) => {
  const defaultCatalog = (list: Array<RteExtensionType>): ExtensionCatalog => {
    const exts = {} as ExtensionCatalog;

    list.forEach((type) => {
      switch (type) {
        case "bold":
          exts[type] = new BoldExtension(editor);
          break;
        case "highlight":
          exts[type] = new BoldExtension(editor);
          break;
        case "linker":
          exts[type] = new BoldExtension(editor);
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

  const handleActivatePlugin = (
    type: RteExtensionType,
    button: HTMLButtonElement,
  ) => {
    exts[type]?.apply();
  };

  return (
    <div>
      {extensions.map((type) => (
        <button
          type="button"
          onClick={(e) =>
            handleActivatePlugin(type, e.target as HTMLButtonElement)
          }
        >
          {type}
        </button>
      ))}
    </div>
  );
};

DemoMenuBar.displayName = "DemoMenuBar";
export default DemoMenuBar;
