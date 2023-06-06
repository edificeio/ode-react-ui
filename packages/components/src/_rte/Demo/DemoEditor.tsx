import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { RteExtensionType } from "../_extensions";
import DemoMenuBar from "./DemoMenuBar";

export interface DemoEditorProps {
  /**
   * HTML string
   */
  content?: string;
  /**
   * Ordered list of optional plugins
   */
  extensions?: Array<RteExtensionType>;
}

const DemoEditor = ({ content, extensions }: DemoEditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
  });

  return (
    <>
      {editor && extensions && extensions.length ? (
        <DemoMenuBar editor={editor} extensions={extensions} />
      ) : (
        <></>
      )}
      <br />
      <EditorContent editor={editor} />
    </>
  );
};

DemoEditor.displayName = "DemoEditor";
export default DemoEditor;
