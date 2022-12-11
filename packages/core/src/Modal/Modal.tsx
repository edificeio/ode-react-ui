/**
 * Modal Component
 *
 * @see Docs      https://ode-react-ui.vercel.app/?path=/docs/components-core-modal--primary
 * @see Source    https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/Modal/Modal.tsx
 * @see WAI-ARIA  https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/
 */
import { forwardRef, useRef } from "react";

import { useClickOutside, useKeyPress } from "@ode-react-ui/hooks";

import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import { ModalProps } from "./ModalProps";
import ModalSubtitle from "./ModalSubtitle";

/**
 * Modal Component
 */
const Root = forwardRef<HTMLDivElement, ModalProps>(
  (props: ModalProps, ref) => {
    const { isOpen, onModalClose, scrollable, children } = props;

    const modalRef = useRef(null);
    useClickOutside(modalRef, () => {
      if (typeof onModalClose === "function") {
        onModalClose();
      }
    });

    useKeyPress(() => {
      if (typeof onModalClose === "function") {
        onModalClose();
      }
    }, ["Escape"]);

    return (
      <>
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal_label"
          aria-describedby="modal_desc"
          className={`modal fade ${isOpen ? "show d-block" : ""}`}
          tabIndex={-1}
        >
          <div
            ref={modalRef}
            className={`modal-dialog ${
              scrollable ? "modal-dialog-scrollable" : ""
            }`}
          >
            <div className="modal-content">{children}</div>
          </div>
        </div>
        {isOpen && <div className="modal-backdrop fade show"></div>}
      </>
    );
  },
);

const Modal = Object.assign({}, Root, {
  Header: ModalHeader,
  Subtitle: ModalSubtitle,
  Body: ModalBody,
  Footer: ModalFooter,
});

Modal.displayName = "Modal";

export default Modal;
