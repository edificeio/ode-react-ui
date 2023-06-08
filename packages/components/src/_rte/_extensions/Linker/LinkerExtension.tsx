import Link from "@tiptap/extension-link";

import { RteModalProps, RteRenderedExtension, RteRenderType } from "..";
import { AppSearchResult } from "../../../_models";
import { Linker, LinkerProps } from "../../../_widgets/Linker";
import { Button } from "../../../Button";
import { ModalProps } from "../../../Modal";
import ModalFooter from "../../../Modal/ModalFooter";
import { AbstractRteExtension } from "../AbstractRteExtension";

//---------------------------------
//------ TipTap-related code ------
//---------------------------------
/* Our own model of a link in a rich document. */
type TipTapLinkerMetadata = {
  href: string | null;
  target: "_blank" | null;
  title: string | null;
  "data-id": string | null;
  "data-app-prefix": string | null;
};

/**
 * Reproduces the legacy angularJs directive.
 * Link to internal resources may have an `title`, `data-id` and `data-app-prefix` attributes :
 * `<a href="/blog#/view/35fa4198-blog_id/5e654c71-article_id" data-app-prefix="blog" data-id="35fa4198-blog_id" target="_blank" title="Voir ce billet de blog" class="ng-scope">/blog#/view/35fa4198-57fe-45eb-94f4-a5e4defff305/5e654c71-1e61-4f84-86dc-6fcfaf33f513</a>`
 * We also have to sanitize values from `title`, so it is overriden too.
 */
export const TipTapLinker = Link.extend({
  /* Manage `title`, `data-id` and `data-app-prefix` attributes. */
  addAttributes() {
    return {
      // Preserve attributes of parent extension...
      ...this.parent?.(),
      // ...then add or override the following :
      //------------------
      target: {
        default: this.options.HTMLAttributes.target,
        // Sanitize target value
        parseHTML: (element) =>
          element.getAttribute("target") !== "_blank" ? null : "_blank",
        // renderHTML: (attributes) => ({
        //   "target": attributes["target"],
        // }),
      },
      title: {
        default: null,
        // Customize the HTML parsing, to load the initial content.
        parseHTML: (element) => element.getAttribute("title"),
        // renderHTML: (attributes) => ({
        //   "title": attributes["title"],
        // }),
      },
      //------------------
      "data-id": {
        default: null,
        parseHTML: (element) => element.getAttribute("data-id"),
        // renderHTML: (attributes) => ({
        //   "data-id": attributes["data-id"],
        // }),
      },
      //------------------
      "data-app-prefix": {
        default: null,
        parseHTML: (element) => element.getAttribute("data-app-prefix"),
        // renderHTML: (attributes) => ({
        //   "data-app-prefix": attributes["data-app-prefix"],
        // }),
      },
    };
  },
});

//--------------------------------
//------ React-related code ------
//--------------------------------
export default class LinkerExtension
  extends AbstractRteExtension
  implements RteRenderedExtension
{
  private renderedProps: LinkerProps = {
    types: ["search", "external"],
    appPrefixes: ["blog", "wiki"], // TODO

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

    onGenerateUrl: ({ prefix, id, subIds }: AppSearchResult): Promise<URL> => {
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
  };

  async apply(): Promise<void> {
    this.editor.chain().focus().toggleBold().run();
  }

  public readonly renderAs: RteRenderType = "modal";

  public async preRender() {
    // Read metadata from the link placed under the cursor, if any, and adapt it to renderedProps.
    return Promise.resolve().then(() => {
      // Check if currently selected node or mark is a link
      const ext = this.editor.getAttributes("link") as TipTapLinkerMetadata;
      if (ext?.target) {
        this.renderedProps.target = ext.target;
      } else {
        this.renderedProps.target && delete this.renderedProps.target;
      }
      if (ext?.title) {
        this.renderedProps.title = ext.title;
      } else {
        this.renderedProps.title && delete this.renderedProps.title;
      }
      if (ext?.href && !ext?.["data-app-prefix"]) {
        this.renderedProps.url = ext.href;
      } else {
        this.renderedProps.url && delete this.renderedProps.url;
      }
    });
  }

  public render(props: RteModalProps): JSX.Element {
    // Apply default values.
    props.size = "xl";

    const handleClick = (ok: boolean) => {
      if (ok) {
        // TODO Sanitize URL before validating it.
        props.onOk();
      } else {
        props.onCancel();
      }
    };

    return (
      <>
        <Linker {...this.renderedProps} />
        <ModalFooter>
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
        </ModalFooter>
      </>
    );
  }
}
