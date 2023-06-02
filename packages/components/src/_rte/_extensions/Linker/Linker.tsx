import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export interface LinkerProps {
  /**
   * Dummy
   */
  dummy?: string;
}

const Linker = () => {
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

Linker.displayName = "Linker";
export default Linker;
