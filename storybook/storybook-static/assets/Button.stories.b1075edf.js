import{j as n}from"./jsx-runtime.ec520223.js";import"./iframe.e6af60df.js";const t=({primary:e=!1,size:r="medium",backgroundColor:a,label:l,...s})=>{const i=e?"btn-primary":"btn-secondary";return n("button",{type:"button",className:["btn",`btn-${r}`,i].join(" "),style:{backgroundColor:a},...s,children:l})};t.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?"},size:{defaultValue:{value:'"medium"',computed:!1},required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"How large should the button be?"},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const g={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Core/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
`,locationsMap:{primary:{startLoc:{col:48,line:16},endLoc:{col:78,line:16},startBody:{col:48,line:16},endBody:{col:78,line:16}},secondary:{startLoc:{col:48,line:16},endLoc:{col:78,line:16},startBody:{col:48,line:16},endBody:{col:78,line:16}},large:{startLoc:{col:48,line:16},endLoc:{col:78,line:16},startBody:{col:48,line:16},endBody:{col:78,line:16}},small:{startLoc:{col:48,line:16},endLoc:{col:78,line:16},startBody:{col:48,line:16},endBody:{col:78,line:16}}}}},title:"Components/Core/Button",component:t,argTypes:{backgroundColor:{control:"color"}}},o=e=>n(t,{...e}),c=o.bind({});c.args={primary:!0,label:"Button"};const d=o.bind({});d.args={label:"Button"};const m=o.bind({});m.args={size:"large",label:"Button"};const p=o.bind({});p.args={size:"small",label:"Button"};const b=["Primary","Secondary","Large","Small"];export{m as Large,c as Primary,d as Secondary,p as Small,b as __namedExportsOrder,g as default};
//# sourceMappingURL=Button.stories.b1075edf.js.map
