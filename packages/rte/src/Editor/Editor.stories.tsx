import { Meta, StoryObj } from "@storybook/react";
import Editor, { EditorProps } from "./Editor";

export default {
  title: "Rich Text Editor/Editor",
  component: Editor,
  args: {} as EditorProps,
} as Meta<typeof Editor>;

type Story = StoryObj<typeof Editor>;

const defaultContent = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
`;

export const Base: Story = {
  render: (args: EditorProps) => (
    <div className="App min-vh-100">
      <Editor content={defaultContent} />
    </div>
  ),
};
