import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { RteExtensionType } from "../_extensions";
import { TipTapLinker } from "../_extensions/Linker/LinkerExtension";
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
    extensions: [StarterKit, TipTapLinker],
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

      <div className="container m-0 mt-16">
        <div className="row align-items-start">
          <div className="col-6">
            <h1>HTML:</h1>
            <code>{editor?.getHTML()}</code>
          </div>
          <div className="col-6">
            <h1>JSON:</h1>
            <code>{JSON.stringify(editor?.getJSON())}</code>
          </div>
        </div>
      </div>

      <article>
        <header>Notes</header>
        <ul>
          <li>
            <b>nodes</b> are just a type of content in the document tree.
            Examples of nodes are paragraphs, headings, or code blocks. But
            nodes don’t have to be blocks. They can also be rendered inline with
            the text, for example for <code>@mentions</code>.
          </li>
          <li>
            One or multiple <b>marks</b> can be applied to nodes, for example to
            add inline formatting like bold and italic, or other additional
            information.
          </li>
          <li>
            <b>Extensions</b> add new capabilities to Tiptap, for example to
            manage history or focus. Some extensions, called nodes and marks,
            can render content in the editor.
          </li>
        </ul>
      </article>
    </>
  );
};

DemoEditor.displayName = "DemoEditor";
export default DemoEditor;
