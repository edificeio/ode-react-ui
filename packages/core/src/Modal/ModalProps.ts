type ModalSize = "md" | "lg" | "xl";

export interface ModalProps {
  /**
   * Modal id (useful when multiple modal on the same page)
   */

  id: string;

  /**
   * Is Modal Open
   */
  isOpen: boolean;

  /**
   * Function to call when closing modal
   */
  onModalClose: () => void;

  /**
   * Size of the modal (width)
   */
  size?: ModalSize;

  /**
   * Is modal scrollable (see https://getbootstrap.com/docs/5.0/components/modal/#scrolling-long-content)
   */
  scrollable?: boolean;

  /**
   * ID of the HTML element to receive focus when modal is active.
   */
  focusId?: string;

  /**
   * Children
   */
  children: React.ReactNode;
}
