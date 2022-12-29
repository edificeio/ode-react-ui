import { Copy, Plus, Search } from "@ode-react-ui/icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Alert } from "../Alert";
import { Button, SearchButton } from "../Button";
import { FormControl, Input, Label } from "../Form";
import { Heading } from "../Heading";
import { ImagePicker } from "../ImagePicker";
import { TreeView } from "../TreeView";
import Modal from "./Modal";
import { data } from "../utils/mock-tree-data";
import { useModal } from "@ode-react-ui/hooks";

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

export const ShareFile = (args: any) => {
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
            Liste des utilisateurs affectés par le partage
          </Heading>

          <table className="table">
            <thead className="table-dark bg-secondary">
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Consulter</th>
                <th scope="col">Contribuer</th>
                <th scope="col">Gérer</th>
                <th scope="col">Commenter</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Image</th>
                <td>
                  Enseignants du groupe
                  <br /> CLG-DENIS POISSON
                </td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>delete</td>
              </tr>
            </tbody>
          </table>

          <Heading headingStyle="h4" level="h3" className="my-24">
            Rechercher des utilisateurs
          </Heading>

          <FormControl className="input-group" id="search">
            <Input
              noValidationIcon
              placeholder="nom d’utilisateurs, groupes, favoris"
              size="md"
              type="search"
            />
            <SearchButton aria-label="search" icon={<Search />} type="submit" />
          </FormControl>

          <Heading headingStyle="h4" level="h3" className="my-24">
            Circuit de publication des billets
          </Heading>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="publication"
              id="publication-now"
            />
            <label className="form-check-label" htmlFor="publication-now">
              Publication immédiate
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="publication"
              id="publication-validate"
            />
            <label className="form-check-label" htmlFor="publication-validate">
              Billets soumis à validation
            </label>
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
            Créer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
ShareFile.args = {
  scrollable: false,
};
