/**
 * Modal Body
 */
const ModalBody = (props: ModalBodyProps) => (
  <div id="modal_desc" className="modal-body">
    {props.children}
  </div>
);

ModalBody.displayName = "ModalBody";

export default ModalBody;

export interface ModalBodyProps {
  children: React.ReactNode;
}
