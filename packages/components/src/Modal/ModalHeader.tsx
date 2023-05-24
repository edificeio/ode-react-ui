import { ReactNode, useEffect, useRef } from "react";

import { useModalContext } from "./ModalContext";

export interface ModalHeaderProps {
  onModalClose: () => void;
  children: ReactNode;
}

/**
 * Modal Header
 */
const ModalHeader = (props: ModalHeaderProps) => {
  const { onModalClose, children } = props;
  const { ariaLabelId, focusId } = useModalContext();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!focusId) {
      closeButtonRef.current?.focus();
    }
  }, [focusId]);

  return (
    <div className="modal-header">
      <h2 id={ariaLabelId} className="modal-title" tabIndex={-1}>
        {children}
      </h2>
      <button
        ref={closeButtonRef}
        type="button"
        className="btn btn-close"
        aria-label="Close"
        onClick={onModalClose}
      ></button>
    </div>
  );
};

ModalHeader.displayName = "Modal.Header";

export default ModalHeader;
