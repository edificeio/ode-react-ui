import { Color } from "@tiptap/extension-color";
import FontFamily from "@tiptap/extension-font-family";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import Toolbar from "./Toolbar";
import { RteExtensionType } from "../extensions";

import "./editor.css";

export interface EditorProps {
  /**
   * HTML string
   */
  content?: string;
  /**
   * Ordered list of optional plugins
   */
  extensions?: Array<RteExtensionType>;
}

const Editor = ({ content, extensions }: EditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // Configure an included extension
        heading: {
          levels: [1, 2],
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      TextStyle,
      Color,
      FontFamily,
      Underline,
    ],
    content: content,
  });

  return (
    <div className="rounded-2 border p-16" style={{ minHeight: 222 }}>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} className="my-12" />
    </div>
  );
};

Editor.displayName = "Editor";
export default Editor;
