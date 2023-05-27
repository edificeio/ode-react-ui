import { Meta, StoryObj } from "@storybook/react";
import useImage from "./useImage";
import docs from "./useImage.mdx";

const meta: Meta<typeof useImage> = {
  title: "Hooks/useImage",
  parameters: {
    docs: { page: docs },
  },
};

export default meta;
type Story = StoryObj<typeof useImage>;

export const Example: Story = {
  render: (args) => {
    const src = "";
    const alt = "alternative text";
    const placeholder =
      "/assets/themes/ode-bootstrap/images/image-placeholder.png";
    const { imgSrc, onError } = useImage({ src, placeholder });

    return <img alt={alt} onError={onError} src={imgSrc} />;
  },
};
