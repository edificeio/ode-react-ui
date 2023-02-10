type AvatarVariants = "square" | "rounded" | "circle";
type AvatarSizes = "xs" | "sm" | "md" | "lg" | "xl";

export interface AvatarProps<T> {
  /**
   * Shape of Avatar
   * `title`, `square`, `circle`
   */
  variant?: AvatarVariants;
  /**
   * Avatar' size
   */
  size?: AvatarSizes;
  /**
   * Show image when `src` props is provided
   */
  src: T;
  /**
   * Custom fallback image
   */
  imgPlaceholder?: T;
  /**
   * Alternative text when using image
   */
  alt: T;
  /**
   * Optional class for styling purpose
   */
  className?: T;
}
