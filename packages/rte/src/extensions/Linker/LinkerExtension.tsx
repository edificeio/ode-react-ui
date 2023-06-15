import { Button, Modal } from "@ode-react-ui/components";
import {
  AppSearchResult,
  Linker,
  LinkerModel,
  LinkerProps,
} from "@ode-react-ui/widgets";

import { TipTapLinkerMetadata } from "./TipTapLinker";
import { RteModalProps, RteRenderedExtension, RteRenderType } from "..";
import { AbstractRteExtension } from "../AbstractRteExtension";

//--------------------------------
//------ React-related code ------
//--------------------------------
export default class LinkerExtension
  extends AbstractRteExtension
  implements RteRenderedExtension
{
  private linkerProps: LinkerProps = {
    types: ["search", "external"],
    appPrefixes: [],

    // TODO real fetch of this mocked data
    onSearch: (appPrefix: string, term: string): Promise<AppSearchResult[]> =>
      Promise.resolve(
        [
          {
            id: "123",
            prefix: "blog",
            subIds: { post: "14c0e7c2-2a07-43a6-b245-dcde2c4fb0d2" },
          },
          { id: "123", prefix: "blog", subIds: { post: "patati-patata" } },
          { id: "456", prefix: "wiki", subIds: { page: "569" } },
          { id: "789", prefix: "actualites" },
        ].filter((val) => val.prefix === appPrefix),
      ),

    // TODO real generation of this mocked data (agent action OPEN)
    onSelectInternalResource: ({
      prefix,
      id,
      subIds,
    }: AppSearchResult): Promise<URL> => {
      switch (prefix) {
        case "blog":
          return Promise.resolve(
            new URL(
              `/${prefix}#/view/${id}/${subIds?.["post"]}`,
              "https://example.com",
            ),
          );
        case "wiki":
          return Promise.resolve(
            new URL(
              `/${prefix}#/view/${id}/${subIds?.["page"]}`,
              "https://example.com",
            ),
          );
        default:
          return Promise.reject("not.implemented");
      }
    },

    onChange: (metadata: LinkerModel) => {
      //debounce with rxjs ?
      this.model = metadata;
    },
  };

  model?: LinkerModel;

  apply(): boolean {
    if (!this.model || !this.model.href) return false;

    return this.editor
      .chain()
      .focus()
      .setLinker({
        href: this.model.href,
        target: this.model.target ?? null,
        title: this.model.title ?? null,
        "data-app-prefix": this.model.appPrefix ?? null,
        "data-id": this.model.id ?? null,
      })
      .run();
  }

  public readonly renderAs: RteRenderType = "modal";

  public async preRender() {
    // On est ici dans les composants "avancés" ! Ils vont devoir pouvoir communiquer avec l'ENT.

    this.linkerProps.appPrefixes = ["blog", "wiki"]; //await fetch('/resources-applications');

    // TODO : utiliser un contexte React pour accéder aux traductions ?
    /*
    this.renderedProps.labels = {
      "linker.address": "Address",
      "linker.address.placeholder": ...,
      "linker.blank: ",
      "linker.external": ,
      "linker.external.placeholder": ,
      "linker.search": ,
      "linker.tooltip": ,
      "linker.tooltip.placeholder": ,
    }
    */

    // Read metadata from the link placed under the cursor, if any, and adapt it to renderedProps.
    // Check if currently selected node or mark is a link
    const ext = this.editor.getAttributes("linker") as TipTapLinkerMetadata;
    if (ext?.target) {
      this.linkerProps.target = ext.target;
    } else {
      this.linkerProps.target && delete this.linkerProps.target;
    }
    if (ext?.title) {
      this.linkerProps.title = ext.title;
    } else {
      this.linkerProps.title && delete this.linkerProps.title;
    }
    if (ext?.href && !ext?.["data-app-prefix"]) {
      this.linkerProps.url = ext.href;
    } else {
      this.linkerProps.url && delete this.linkerProps.url;
    }
  }

  public render(props: RteModalProps): JSX.Element {
    // Apply default values.
    props.size = "xl";

    const handleClick = (ok: boolean) => {
      if (ok) {
        // TODO sanitize URL before validating it.
        if (this.model && this.model.href) {
          props.onOk();
        }
      } else {
        props.onCancel();
      }
    };

    return (
      <>
        <Linker {...this.linkerProps} />
        <Modal
          isOpen
          id="linker-extension"
          onModalClose={() => console.log("close")}
        >
          <Modal.Footer>
            <Button
              type="button"
              color="tertiary"
              variant="ghost"
              onClick={(e) => handleClick(false)}
            >
              Cancel
            </Button>
            <Button
              id="validateButtonId"
              type="button"
              color="primary"
              variant="filled"
              onClick={(e) => handleClick(true)}
            >
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
