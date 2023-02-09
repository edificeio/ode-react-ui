export interface EmptyScreenProps {
  /**
   * Image
   */
  image:
    | "blog"
    | "collaborativeeditor"
    | "collaborativewall"
    | "exercizer"
    | "mindmap"
    | "scrapbook"
    | "search"
    | "timelinegenerator"
    | "trash";

  /**
   * Title
   */
  title?: string;

  /**
   * Text to display
   */
  text?: string;
}
