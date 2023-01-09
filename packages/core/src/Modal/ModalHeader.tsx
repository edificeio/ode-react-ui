import { useModalContext } from "./ModalContext";

/**
 * Modal Header
 */
const ModalHeader = (props: ModalHeaderProps) => {
  const { onModalClose, children } = props;
  const { ariaLabelId } = useModalContext();

  return (
    <div className="modal-header">
      <h2 id={ariaLabelId} className="modal-title">
        {children}
      </h2>
      <button
        type="button"
        className="btn btn-close"
        aria-label="Close"
        onClick={() => onModalClose()}
      ></button>
    </div>
  );
};

ModalHeader.displayName = "Modal.Header";

export default ModalHeader;

export interface ModalHeaderProps {
  onModalClose: Function;
  children: React.ReactNode;
}
