import { ChangeEvent, EventHandler, useState } from "react";

import { useModal } from "@ode-react-ui/hooks";
import {
    ArrowUp,
    Check,
    CheckboxEmpty,
    CheckboxSelected,
    Close,
    Copy,
    Plus,
    RafterDown,
    RafterUp,
    Save,
    Search,
} from "@ode-react-ui/icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Alert } from "../Alert";
import { Avatar } from "../Avatar";
import { Button, IconButton, SearchButton } from "../Button";
import { Checkbox, FormControl, Input, Label, Radio } from "../Form";
import { Heading } from "../Heading";
import { ImagePicker } from "../ImagePicker";
import { TreeView } from "../TreeView";
import { data } from "../utils/mock-tree-data";
import Modal from "./Modal";

export default {
  title: "Components/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args: any) => {
  const { isOpen, toggle: toggleModal } = useModal(false);

  function handleOpenModal() {
    toggleModal(true);
  }

  function handleCloseModal() {
    toggleModal(false);
  }

  return (
    <>
      <Button
        type="button"
        variant="filled"
        color="primary"
        onClick={handleOpenModal}
      >
        Open Modal
      </Button>
      <Modal {...args} isOpen={isOpen} onModalClose={handleCloseModal}>
        <Modal.Header onModalClose={handleCloseModal}>
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
            onClick={handleCloseModal}
          >
            Cancel
          </Button>
          <Button
            type="button"
            color="primary"
            variant="filled"
            onClick={handleCloseModal}
          >
            Validate
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const Base = Template.bind({});
Base.args = {
  id: "primaryModal",
  size: "lg",
  scrollable: true,
};

const TemplateMoveFile: ComponentStory<typeof Modal> = (args: any) => {
  const { isOpen, toggle: toggleModal } = useModal(false);

  function handleOpenModal() {
    toggleModal(true);
  }

  function handleCloseModal() {
    toggleModal(false);
  }

  return (
    <>
      <Button
        type="button"
        variant="filled"
        color="primary"
        onClick={handleOpenModal}
      >
        Déplacer l'élément
      </Button>
      <Modal {...args} isOpen={isOpen} onModalClose={handleCloseModal}>
        <Modal.Header onModalClose={handleCloseModal}>Déplacer</Modal.Header>
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
            onClick={handleCloseModal}
          >
            Annuler
          </Button>
          <Button
            type="button"
            color="primary"
            variant="filled"
            onClick={handleCloseModal}
          >
            Déplacer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export const MoveFile = TemplateMoveFile.bind({});
MoveFile.args = {
  id: "moveFileModal",
  scrollable: true,
};

export const CreateFile = (args: any) => {
  const { isOpen, toggle: toggleModal } = useModal(false);

  function handleOpenModal() {
    toggleModal(true);
  }

  function handleCloseModal() {
    toggleModal(false);
  }

  return (
    <>
      <Button
        type="button"
        variant="filled"
        color="primary"
        onClick={handleOpenModal}
      >
        Création
      </Button>
      <Modal
        {...args}
        size="lg"
        isOpen={isOpen}
        onModalClose={handleCloseModal}
      >
        <Modal.Header onModalClose={handleCloseModal}>Création</Modal.Header>

        <Modal.Body>
          <Heading headingStyle="h4" level="h3" className="mb-16">
            Général
          </Heading>

          <div className="d-flex flex-column flex-md-row gap-16 mb-24">
            <ImagePicker
              label="Upload an image"
              addButtonLabel="Add image"
              deleteButtonLabel="Delete image"
              onUploadImage={() => {}}
              onDeleteImage={() => {}}
              className="align-self-center"
            />

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

          <Heading headingStyle="h4" level="h3" className="mb-16">
            Accès au blog
          </Heading>

          <Alert type="info">
            Votre blog reste accessible aux personnes à qui vous l'avez partagé.
            Vous pouvez cependant créer un lien public afin que des personnes
            hors de l'ENT puissent y accéder.
          </Alert>

          <FormControl
            id="flexSwitchCheckDefault"
            className="form-check form-switch my-16"
          >
            <FormControl.Input
              className="form-check-input"
              type="checkbox"
              role="switch"
              size="md"
            />
            <FormControl.Label className="form-check-label">
              Accessible publiquement via une URL
            </FormControl.Label>
          </FormControl>

          <FormControl id="slug">
            <div className="d-flex flex-wrap align-items-center mt-16 mb-3 gap-4">
              <div>https://neoconnect.opendigitaleducation.com/</div>

              <div className="flex-fill">
                <Input
                  type="text"
                  size="md"
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
          </FormControl>
        </Modal.Body>

        <Modal.Footer>
          <Button
            type="button"
            color="primary"
            variant="outline"
            onClick={handleCloseModal}
          >
            Annuler
          </Button>

          <Button
            type="button"
            color="primary"
            variant="filled"
            onClick={handleCloseModal}
          >
            Créer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
CreateFile.args = {
  scrollable: false,
};

//Sample to adapt
const sharingModelEdited: any = [
  {
    id: 0,
    hide: false,
    type: "group",
    username: "Enseignants du groupe CLG-DENIS POISSON",
    name: "Enseignants du groupe CLG-DENIS POISSON",
    actions: {
      read: true,
      write: true,
      manage: true,
      comment: 0,
    },
  },
  {
    id: 2,
    hide: false,
    type: "group",
    username: "Eleves du groupe CLG-DENIS POISSON",
    name: "Eleves du groupe CLG-DENIS POISSON",
    actions: {
      read: true,
      write: true,
      manage: true,
      comment: 0,
    },
  },
];

//Sample to adapt
const actions = [
  {
    displayName: "read",
  },
  {
    displayName: "write",
  },
  {
    displayName: "manage",
  },
  {
    displayName: "comment",
  },
];

export const ShareFile = (args: any) => {
  const { isOpen, toggle: toggleModal } = useModal(false);
  const [showBookmarkInput, toggleBookmarkInput] = useState(false);
  const [radioPublicationValue, setRadioPublicationValue] =
    useState<string>("now");
  const [items, setItems] = useState<any>(sharingModelEdited);

  function handleOpenModal() {
    toggleModal(true);
  }

  function handleCloseModal() {
    toggleModal(false);
  }

  const handleRadioPublicationChange = (event: any) => {
    setRadioPublicationValue(event.target.value);
  };

  const handleActionCheckbox = (item: any, actionName: string) => {
    setItems((prevItems: any[]) => {
      //item.actions[actionName] = !item.actions[actionName];
      const newItems = [...prevItems];
      const index = newItems.findIndex((x) => x.id == item.id);
      newItems[index].actions[actionName] =
        !newItems[index].actions[actionName];

      return newItems;
    });
  };

  return (
    <>
      <Button
        type="button"
        variant="filled"
        color="primary"
        onClick={handleOpenModal}
      >
        Share
      </Button>
      <Modal
        {...args}
        size="lg"
        isOpen={isOpen}
        onModalClose={handleCloseModal}
      >
        <Modal.Header onModalClose={handleCloseModal}>
          Partager avec ...
        </Modal.Header>

        <Modal.Body>
          <Heading headingStyle="h4" level="h3" className="mb-16">
            Utilisateurs ayant accès
          </Heading>

          <table className="table border align-middle">
            <thead className="bg-secondary text-white">
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                {actions.map((action) => (
                  <th
                    key={action.displayName}
                    scope="col"
                    className="text-center"
                  >
                    {action.displayName}
                  </th>
                ))}
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item: any) => (
                <tr key={item.id}>
                  <th scope="row">
                    <div className="w-24">
                      <img
                        alt="alternative text"
                        src="https://media.istockphoto.com/id/1322277517/fr/photo/herbe-sauvage-dans-les-montagnes-au-coucher-du-soleil.jpg?s=612x612&w=0&k=20&c=tQ19uZQLlIFy8J6QWMyOL6lPt3pdSHBSDFHoXr1K_g0="
                        className="rounded-circle w-24 h-24 object-fit-cover"
                      />
                    </div>
                  </th>
                  <td>
                    {item.type === "user" && item.username}
                    {item.type === "group" && item.name}
                  </td>
                  {actions.map((action) => (
                    <td
                      key={action.displayName}
                      style={{ width: "80px" }}
                      className="text-center"
                    >
                      <Checkbox
                        checked={item.actions[action.displayName]}
                        onChange={(e) =>
                          handleActionCheckbox(item, action.displayName)
                        }
                      />
                    </td>
                  ))}
                  <td>
                    <IconButton
                      aria-label="Delete"
                      color="tertiary"
                      icon={<Close />}
                      type="button"
                      variant="ghost"
                      title="Delete"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-24">
            <Button
              color="tertiary"
              leftIcon={<Save title="Save" />}
              rightIcon={
                <RafterDown
                  title="Show"
                  style={{
                    transition: "rotate 0.3s ease-out",
                    rotate: showBookmarkInput ? "180deg" : "0deg",
                  }}
                />
              }
              type="button"
              variant="ghost"
              onClick={() => toggleBookmarkInput(!showBookmarkInput)}
            >
              Enregistrer comme favori de partage
            </Button>
            {showBookmarkInput && (
              <div className="mt-16">
                <FormControl
                  id="bookmarkName"
                  className="d-flex flex-wrap align-items-center gap-16"
                >
                  <div className="flex-fill">
                    <FormControl.Input
                      placeholder="Saisir le nom du favori"
                      size="sm"
                      type="text"
                    />
                  </div>
                  <Button
                    type="button"
                    color="primary"
                    variant="ghost"
                    leftIcon={<Save />}
                    className="text-nowrap"
                  >
                    Enregistrer favori
                  </Button>
                </FormControl>
              </div>
            )}
          </div>

          <hr className="my-24 text-medium" />

          <Heading headingStyle="h4" level="h3" className="my-24">
            Rechercher des utilisateurs
          </Heading>

          <FormControl className="input-group max-w-512" id="search">
            <Input
              noValidationIcon
              placeholder="nom d’utilisateurs, groupes, favoris"
              size="md"
              type="search"
            />
            <SearchButton aria-label="search" icon={<Search />} type="submit" />
          </FormControl>

          <hr className="my-24 text-medium" />

          <Heading headingStyle="h4" level="h3" className="my-24">
            Circuit de publication des billets
          </Heading>

          <Radio
            label="Publication immédiate"
            id="publication-now"
            name="publication"
            value="now"
            model={radioPublicationValue}
            onChange={handleRadioPublicationChange}
          />
          <Radio
            label="Billets soumis à validation"
            id="publication-validate"
            name="publication"
            value="validate"
            model={radioPublicationValue}
            onChange={handleRadioPublicationChange}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button
            type="button"
            color="primary"
            variant="outline"
            onClick={handleCloseModal}
          >
            Annuler
          </Button>

          <Button
            type="button"
            color="primary"
            variant="filled"
            onClick={handleCloseModal}
          >
            Partager
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
ShareFile.args = {
  scrollable: false,
};

export const PublishOnLibrary = (args: any) => {
  const { isOpen, toggle: toggleModal } = useModal(false);

  function handleOpenModal() {
    toggleModal(true);
  }

  function handleCloseModal() {
    toggleModal(false);
  }

  return (
    <>
      <Button
        type="button"
        variant="filled"
        color="primary"
        onClick={handleOpenModal}
      >
        Publier dans la bibliothèque
      </Button>
      <Modal
        {...args}
        size="lg"
        isOpen={isOpen}
        onModalClose={handleCloseModal}
      >
        <Modal.Header onModalClose={handleCloseModal}>
          Publier dans la Bibliothèque
        </Modal.Header>
        <p>
          La Bilbiothèque est un espace de partage d’activités et de ressources
          mutualisées entre enseignants.
        </p>

        <Modal.Body>
          <Heading headingStyle="h4" level="h3" className="mb-16">
            Général
          </Heading>

          <FormControl id="title" className="mb-16">
            <Label>Titre</Label>
            <Input
              type="text"
              placeholder="Nom de la ressource"
              size="md"
              aria-required={true}
            />
          </FormControl>

          <div className="mb-24">
            <ImagePicker
              label="Upload an image"
              addButtonLabel="Add image"
              deleteButtonLabel="Delete image"
              onUploadImage={() => {}}
              onDeleteImage={() => {}}
              className="align-self-center"
            />
          </div>

          <FormControl id="description" isOptional>
            <Label>Description et contexte pédagogique</Label>
            <Input
              type="text"
              placeholder="Description de la ressource"
              size="md"
              aria-required={true}
            />
          </FormControl>

          <Heading headingStyle="h4" level="h3" className="mb-16">
            Accès au blog
          </Heading>

          <Alert type="info">
            Votre blog reste accessible aux personnes à qui vous l'avez partagé.
            Vous pouvez cependant créer un lien public afin que des personnes
            hors de l'ENT puissent y accéder.
          </Alert>

          <FormControl
            id="flexSwitchCheckDefault"
            className="form-check form-switch my-16"
          >
            <FormControl.Input
              className="form-check-input"
              type="checkbox"
              role="switch"
              size="md"
            />
            <FormControl.Label className="form-check-label">
              Accessible publiquement via une URL
            </FormControl.Label>
          </FormControl>

          <FormControl id="slug">
            <div className="d-flex flex-wrap align-items-center mt-16 mb-3 gap-4">
              <div>https://neoconnect.opendigitaleducation.com/</div>

              <Input
                type="text"
                size="md"
                placeholder="extention personnalisée"
              />
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
          </FormControl>
        </Modal.Body>

        <Modal.Footer>
          <Button
            type="button"
            color="primary"
            variant="outline"
            onClick={handleCloseModal}
          >
            Annuler
          </Button>

          <Button
            type="button"
            color="primary"
            variant="filled"
            onClick={handleCloseModal}
          >
            Créer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
PublishOnLibrary.args = {
  scrollable: false,
};
