export interface AvatarProps {
  /**
   * Shape of Avatar
   * `title`, `square`, `circle`
   */
  variant?: "square" | "rounded" | "circle";
  /**
   * Avatar' size
   */
  size?: "xs" | "sm" | "md" | "lg";
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
