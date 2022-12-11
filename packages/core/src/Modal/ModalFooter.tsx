/**
 * Modal Footer
 */
const ModalFooter = (props: ModalFooterProps) => (
  <div className="modal-footer">{props.children}</div>
);

ModalFooter.displayName = "ModalFooter";

export default ModalFooter;

export interface ModalFooterProps {
  children: React.ReactNode;
}
