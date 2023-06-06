import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export interface LinkerExtensionProps {
  /**
   * Dummy
   */
  dummy?: string;
}

const LinkerExtension = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Salut, tout le monde !</p>",
  });

  return (
    <>
      <EditorContent editor={editor} />
    </>
  );
};

LinkerExtension.displayName = "LinkerExtension";
export default LinkerExtension;
