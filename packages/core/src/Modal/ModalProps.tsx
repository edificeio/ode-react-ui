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
  onModalClose: Function;

  /**
   * Is modal scrollable (see https://getbootstrap.com/docs/5.0/components/modal/#scrolling-long-content)
   */
  scrollable?: boolean;

  /**
   * Children
   */
  children: React.ReactNode;
}
