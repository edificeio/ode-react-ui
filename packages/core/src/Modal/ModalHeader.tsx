import { ReactNode, useEffect, useRef } from "react";

import { useModalContext } from "./ModalContext";

/**
 * Modal Header
 */
const ModalHeader = (props: ModalHeaderProps) => {
  const { onModalClose, children } = props;
  const { ariaLabelId } = useModalContext();
  const h2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    h2Ref.current?.focus();
  }, []);

  return (
    <div className="modal-header">
      <h2 ref={h2Ref} id={ariaLabelId} className="modal-title" tabIndex={-1}>
        {children}
      </h2>
      <button
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

export interface ModalHeaderProps {
  onModalClose: () => void;
  children: ReactNode;
}
