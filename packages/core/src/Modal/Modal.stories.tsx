import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Button } from "../Button";

import Modal from "./Modal";

export default {
  title: "Components/Core/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        variant="filled"
        color="primary"
        onClick={() => setModalOpen(true)}
      >
        Open Modal
      </Button>
      <Modal {...args} isOpen={isModalOpen} close={() => setModalOpen(false)}>
        <Modal.Header close={() => setModalOpen(false)}>
          Modal Header
        </Modal.Header>
        <Modal.Subtitle>Subtitle or description</Modal.Subtitle>
        <Modal.Body>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum
            nunc et mollis varius. Donec quis imperdiet libero. Sed eleifend
            euismod ipsum, et elementum enim ultricies sed. Nunc convallis
            tempus viverra. Mauris faucibus dolor felis, ac consectetur purus
            aliquet id. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Aliquam imperdiet neque non neque
            bibendum, nec gravida sem lobortis. Cras mattis congue arcu, dictum
            dictum velit fermentum eget.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="button"
            color="primary"
            variant="outline"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </Button>
          <Button
            type="button"
            color="primary"
            variant="filled"
            onClick={() => setModalOpen(false)}
          >
            Validate
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  scrollable: true,
};
Primary.decorators = [(Story) => <div className="p-12">{Story()}</div>];
