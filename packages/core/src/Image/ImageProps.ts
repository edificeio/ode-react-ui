export interface ImageProps extends React.ComponentPropsWithRef<"img"> {
  /**
   * Image URL
   */
  src: string;
  /**
   * Alternative text for a11y
   */
  alt: string;
  /**
   * Image ratio
   */
  ratio?: "1" | "4" | "16" | "21";
  /**
   * Object fit property
   */
  objectFit?: "contain" | "cover" | "fill" | "scale" | "none";
  /**
   * Placeholder image as fallback
   */
  imgPlaceholder?: string;
}