import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useEffect } from "react";

import Header from "./Header";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Core/Header Neo",
  component: Header,
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Base = ({ args }: any) => {
  useEffect(() => {
    let newLink = document.getElementById(
      "theme-ode",
    ) as HTMLAnchorElement | null;
    if (newLink) {
      newLink.href = "themes/ode-bootstrap-neo.css";
      /* if (newLink.href.endsWith("one.css")) {
        newLink.href = "themes/ode-bootstrap-neo.css";
      } */
    }
  }, []);
  return <Header {...args} />;
};
