import { useState } from "react";

import {
  AppCard,
  Button,
  FormControl,
  Input,
  Label,
  Modal,
} from "@ode-react-ui/core";
import { AlertCircle, Copy } from "@ode-react-ui/icons";
import { ComponentStory } from "@storybook/react";

export const TemplateCreateFile: ComponentStory<typeof Modal> = (args) => {
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
          <div
            className="alert alert-primary d-flex align-items-center"
            role="alert"
          >
            <AlertCircle className="me-12" />
            <div>
              Votre blog reste accessible aux personnes à qui vous l'avez
              partagé. Vous pouvez cependant créer un lien public afin que des
              personnes hors de l'ENT puissent y accéder.
            </div>
          </div>

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
