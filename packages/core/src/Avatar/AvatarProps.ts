type AvatarVariants = "square" | "rounded" | "circle";
type AvatarSizes = "xs" | "sm" | "md" | "lg" | "xl";

export interface AvatarProps extends React.ComponentPropsWithRef<"img"> {
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
  src: string;
  /**
   * Custom fallback image
   */
  imgPlaceholder?: string;
  /**
   * Alternative text when using image
   */
  alt: string;
  /**
   * Optional class for styling purpose
   */
  className?: string;
}
