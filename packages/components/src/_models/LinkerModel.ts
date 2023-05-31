/**
 * Definition of a link.
 */
export type Link = {
  url: string;
  title?: string;
  target: "_blank" | undefined;
  appPrefix?: string;
  id?: string;
};

export type AppSearchResult = {
  id: string;
  prefix: string;
};
