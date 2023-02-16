import { ComponentMeta, ComponentStory } from "@storybook/react";
import Library from "./Library";

export default {
  title: "Components/Library",
  component: Library,
  parameters: {
    docs: {
      description: {
        component: "Component library",
      },
    },
  },
  args: {
    text: "Découvrez plein d'activités à réutiliser dans la bibliothèque !",
    textButton: "Découvrir",
    src: "/assets/themes/ode-bootstrap/images/image-library.png",
  },
} as ComponentMeta<typeof Library>;

export const Base = (args: any) => {
  return (
    <>
      <div
        className="p-16"
        style={{
          width: `300px`,
        }}
      >
        <Library {...args} />
      </div>
    </>
  );
};
