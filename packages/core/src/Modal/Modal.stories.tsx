import { useState } from "react";

import { Copy, Plus } from "@ode-react-ui/icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Alert } from "../Alert";
import { AppCard } from "../AppCard";
import { Button } from "../Button";
import { FormControl, Input, Label } from "../Form";
import { TreeView } from "../TreeView";
import { TreeNode } from "../TreeView/TreeViewProps";
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
      <Modal
        {...args}
        isOpen={isModalOpen}
        onModalClose={() => setModalOpen(false)}
      >
        <Modal.Header onModalClose={() => setModalOpen(false)}>
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
  id: "primaryModal",
  size: "lg",
  scrollable: true,
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
export const MoveFile = ({ ...args }) => {
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
MoveFile.args = {
  id: "moveFileModal",
  scrollable: true,
};

export const CreateFile = ({ ...args }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Button
        type="button"
        variant="filled"
        color="primary"
        onClick={() => setModalOpen(true)}
      >
        Création
      </Button>
      <Modal
        {...args}
        isOpen={isModalOpen}
        onModalClose={() => setModalOpen(false)}
      >
        <Modal.Header onModalClose={() => setModalOpen(false)}>
          Création
        </Modal.Header>

        <Modal.Body>
          <div className="h4 mb-16">Général</div>

          <div className="row">
            <div
              className="ratio ratio-1x1 rounded-2 bg-blog bg-light"
              style={{ width: 160 }}
            >
              <AppCard
                app={{
                  address: "/blog",
                  icon: "blog-large",
                  name: "Blog",
                  scope: [],
                  display: true,
                  displayName: "",
                  isExternal: false,
                }}
              >
                <AppCard.Icon size="48" />
              </AppCard>
            </div>

            <div className="col">
              <FormControl id="title" className="mb-16">
                <Label>Titre</Label>
                <Input
                  type="text"
                  placeholder="Nom de la ressource"
                  size="md"
                  aria-required={true}
                />
              </FormControl>
              <FormControl id="description" isOptional>
                <Label>Description</Label>
                <Input
                  type="text"
                  placeholder="Nom de la ressource"
                  size="md"
                  aria-required={true}
                />
              </FormControl>
            </div>
          </div>
          <hr className="my-24" />
          <div className="h4 mb-16">Accès au blog</div>
          <Alert type="info">
            Votre blog reste accessible aux personnes à qui vous l'avez partagé.
            Vous pouvez cependant créer un lien public afin que des personnes
            hors de l'ENT puissent y accéder.
          </Alert>

          <div className="form-check mt-14">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Accessible publiquement via une URL
            </label>
          </div>

          <div className="input-group mb-3 d-flex gap-8">
            <div>
              <span className="input-group-text" id="basic-addon3">
                https://neoconnect.opendigitaleducation.com/
              </span>
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="extention personnalisée"
              />
            </div>
            <Button
              color="primary"
              onClick={() => {}}
              type="button"
              leftIcon={<Copy />}
              variant="ghost"
              className="text-nowrap"
            >
              Copier URL
            </Button>
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
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
CreateFile.args = {
  scrollable: false,
};
