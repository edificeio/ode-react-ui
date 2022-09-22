import { ComponentStory, ComponentMeta } from "@storybook/react";

import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";

import { ArrowRight, ArrowDown } from "@ode-react-ui/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Complex Components/TreeView",
  component: TreeView,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TreeView>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TreeView> = (args) => (
  <TreeView
    aria-label="file system navigator"
    defaultCollapseIcon={<ArrowDown />}
    defaultExpandIcon={<ArrowRight />}
    sx={{ height: 500, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
  >
    <TreeItem nodeId="1" label="Applications">
      <TreeItem nodeId="2" label="Calendar" />
    </TreeItem>
    <TreeItem nodeId="5" label="Documents">
      <TreeItem nodeId="10" label="OSS" />
      <TreeItem nodeId="6" label="MUI">
        <TreeItem nodeId="8" label="index.js" />
      </TreeItem>
    </TreeItem>
  </TreeView>
);

export const Primary = Template.bind({});
