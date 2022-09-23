import { ComponentStory, ComponentMeta } from "@storybook/react";

import { default as TreeView } from "./TreeView";
import { RenderTree } from "./TreeViewProps";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Advanced/TreeView",
  component: TreeView,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TreeView>;

const data: RenderTree = {
  id: "root",
  name: "Parent",
  children: [
    {
      id: "1",
      name: "Child - 1",
    },
    {
      id: "3",
      name: "Child - 3",
      children: [
        {
          id: "4",
          name: "Child - 4",
        },
      ],
    },
  ],
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TreeView> = (args) => (
  <TreeView data={data} />
);

export const Primary = Template.bind({});
