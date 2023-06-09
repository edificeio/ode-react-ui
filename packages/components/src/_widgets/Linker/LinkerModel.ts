/**
 * Definition of a link.
 */
export type LinkerModel = {
  href: string;
  title?: string;
  target: "_blank" | undefined;
  appPrefix?: string;
  id?: string;
};

export type AppSearchResult = {
  /** Application prefix */
  prefix: string;

  /** ID of the main resource. */
  id: string;

  /**
   * IDs of the sub-resources, if any. Depends on the app model.
   * For example, if the main resource is a blog, this could be `{"post": "0123456"}` to target a blog post specifically.
   */
  subIds?: {
    post?: string;
    page?: string;
  };
};
