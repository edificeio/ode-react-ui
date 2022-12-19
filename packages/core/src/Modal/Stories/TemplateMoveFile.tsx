import { useState } from "react";

import {
  Button,
  FormControl,
  Input,
  Modal,
  TreeView,
} from "@ode-react-ui/core";
import { Plus } from "@ode-react-ui/icons";
import { ComponentStory } from "@storybook/react";

import { TreeNode } from "../../TreeView/TreeViewProps";

export const TemplateMoveFile: ComponentStory<typeof Modal> = (args) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        variant="filled"
        color="primary"
        onClick={() => setModalOpen(true)}
      >
        Déplacer
      </Button>
      <Modal
        {...args}
        isOpen={isModalOpen}
        onModalClose={() => setModalOpen(false)}
      >
        <Modal.Header onModalClose={() => setModalOpen(false)}>
          Déplacer
        </Modal.Header>
        <Modal.Subtitle>
          Sélectionner le dossier vers lequel déplacer les éléments
        </Modal.Subtitle>
        <Modal.Body>
          <TreeView data={data} />
          <div className="mt-48">
            <FormControl id="folder-name" className="d-flex gap-8">
              <Input type="text" placeholder="Saisir un nom" size="md" />
              <Button
                color="primary"
                onClick={() => {}}
                type="button"
                leftIcon={<Plus />}
                variant="ghost"
                className="text-nowrap"
              >
                Créer dossier
              </Button>
            </FormControl>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="button"
            color="primary"
            variant="outline"
            onClick={() => setModalOpen(false)}
          >
            Annuler
          </Button>
          <Button
            type="button"
            color="primary"
            variant="filled"
            onClick={() => setModalOpen(false)}
          >
            Déplacer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

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
