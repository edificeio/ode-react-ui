import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IconButton, ImagePicker } from "../index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Forms/ImagePicker",
  component: ImagePicker,
  parameters: {
    docs: {
      description: {
        component:
          "The ImagePicker allows users to upload images. Its default behavior shows the Avatar component. If the image should be read-only, please use the Avatar Component.",
      },
    },
  },
  args: {
    label: "Upload an image",
    addButtonLabel: "Add image",
    deleteButtonLabel: "Delete image",
    onUploadImage: () => {},
    onDeleteImage: () => {},
  },
  argTypes: {
    onUploadImage: {
      control: {
        type: null,
      },
    },
    onDeleteImage: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof ImagePicker>;

const Template: ComponentStory<typeof ImagePicker> = (args: any) => (
  <ImagePicker {...args} />
);
export const Base = Template.bind({});

export const DisabledButton = Template.bind({});
DisabledButton.parameters = {
  docs: {
    description: {
      story: "When no image is uploaded, the delete button is disabled.",
    },
  },
};

export const AppPlaceholder = Template.bind({});
AppPlaceholder.args = {
  appCode: "blog",
};
AppPlaceholder.parameters = {
  docs: {
    description: {
      story:
        "When an `appCode` prop is provided with the code of an application, the ImagePicker will show app icon as a placeholder.",
    },
  },
};

export const ImageURL = Template.bind({});
ImageURL.args = {
  src: "https://imgur.com/wZt78Lv.png",
};
ImageURL.parameters = {
  docs: {
    description: {
      story:
        "When an `src` prop is provided, the ImagePicker renders it as an image. The image can be deleted by clicking the delete button. When you click the Add button, the image will be replaced with the uploaded image.",
    },
  },
};

export const UploadImageWithCallbacks = (args: any) => {
  function handleUploadImage(obj: any) {
    alert(`Uploading image ${JSON.stringify(obj)}`);
  }
  function handleDeleteImage() {
    alert("Image deleted");
  }
  return (
    <ImagePicker
      {...args}
      onUploadImage={handleUploadImage}
      onDeleteImage={handleDeleteImage}
    />
  );
};
UploadImageWithCallbacks.parameters = {
  docs: {
    description: {
      story:
        "The `onUploadImage` and `onClearImage` props are needed to handle callbacks when the image is uploaded or deleted.",
    },
  },
};
