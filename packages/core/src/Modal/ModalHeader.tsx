import { Close } from "@ode-react-ui/icons";

/**
 * Modal Header
 */
const ModalHeader = (props: ModalHeaderProps) => {
  const { onModalClose, children } = props;
  return (
    <div className="modal-header">
      <h2 id="modal_label" className="modal-title">
        {children}
      </h2>
      <button
        type="button"
        className="btn btn-naked close"
        aria-label="Close"
        onClick={() => onModalClose()}
      >
        <Close title="Close" />
      </button>
    </div>
  );
};

ModalHeader.displayName = "ModalHeader";

export default ModalHeader;

export interface ModalHeaderProps {
  onModalClose: Function;
  children: React.ReactNode;
}
