export type AppTitleRef = HTMLDivElement;

export interface AppTitleProps {
  /**
   * Display the icon of the application
   */
  icon?: JSX.Element;
  /**
   * Name of the application.
   */
  name?: string;
  /**
   * For styling purpose
   */
  code?: string | undefined;
}
