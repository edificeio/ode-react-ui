export interface AvatarProps {
  /**
   * Show image as default behaviour
   */
  isIconUrl?: boolean;
  /**
   * Shape of Avatar
   * `title`, `square`, `circle`
   */
  variant: string;
  /**
   * Avatar' size
   */
  size?: string;
  /**
   * To show the icon of an application
   */
  appCode?: string;
  /**
   * Alternative text when using image
   */
  alt?: string;
  /**
   * SRC link of image
   */
  src?: string;
  /**
   * Optional class for styling purpose
   */
  className?: string;
}
