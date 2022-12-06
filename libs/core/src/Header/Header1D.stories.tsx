import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useEffect } from "react";

import Header from "./Header";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Core/Header One",
  component: Header,
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

// export const Header1d = Template.bind({});
export const Base = ({ args }: any) => {
  useEffect(() => {
    let newLink = document.getElementById(
      "theme-ode",
    ) as HTMLAnchorElement | null;
    if (newLink) {
      newLink.href = "themes/ode-bootstrap-one.css";
      /* if (newLink.href.endsWith("neo.css")) {
        newLink.href = "themes/ode-bootstrap-one.css";
      } */
    }
  }, []);

  return <Header {...args} is1d />;
};
Base.decorators = [
  (Story: any) => (
    <div
      className="demo-purpose"
      style={{
        backgroundImage: `url("https://oneconnect.opendigitaleducation.com/assets/themes/ode-bootstrap-one/images/background.jpg")`,
        minHeight: "100vh",
      }}
    >
      {Story()}
    </div>
  ),
];
