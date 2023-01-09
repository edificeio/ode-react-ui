import { useModalContext } from "./ModalContext";

/**
 * Modal Body
 */
const ModalBody = (props: ModalBodyProps) => {
  const { ariaDescriptionId } = useModalContext();

  return (
    <div id={ariaDescriptionId} className="modal-body">
      {props.children}
    </div>
  );
};

ModalBody.displayName = "Modal.Body";

export default ModalBody;

export interface ModalBodyProps {
  children: React.ReactNode;
}
