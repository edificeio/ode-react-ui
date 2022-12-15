import { ComponentStory, ComponentMeta } from "@storybook/react";
import TreeView from "./TreeView";
import { TreeNode } from "./TreeViewProps";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Core/TreeView",
  component: TreeView,
} as ComponentMeta<typeof TreeView>;

const data: TreeNode = {
  id: "root",
  name: "Section Element",
  section: true,
  children: [
    {
      id: "1",
      name: "level 1 arborescence tree",
      children: [
        {
          id: "4",
          name: "level 2 arborescence tree",
          children: [
            {
              id: "8",
              name: "level 3 arborescence tree",
              children: [
                {
                  id: "12",
                  name: "level 4 arborescence tree",
                },
                {
                  id: "13",
                  name: "level 4 arborescence tree",
                },
              ],
            },
            {
              id: "9",
              name: "level 3 arborescence tree",
            },
          ],
        },
        {
          id: "5",
          name: "level 2 arborescence tree",
          children: [
            {
              id: "10",
              name: "level 3 arborescence tree",
            },
            {
              id: "11",
              name: "level 3 arborescence tree",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "level 1 arborescence tree",
      children: [
        {
          id: "6",
          name: "level 2 arborescence tree",
        },
        {
          id: "7",
          name: "level 2 arborescence tree",
        },
      ],
    },
    {
      id: "3",
      name: "level 1 arborescence tree",
    },
  ],
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TreeView> = (args) => (
  <TreeView {...args} />
);

export const Base = Template.bind({});
Base.args = {
  data,
};
