/**
 * Modal Component
 *
 * @see Docs      https://ode-react-ui.vercel.app/?path=/docs/components-core-modal--primary
 * @see Source    https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/Modal/Modal.tsx
 * @see WAI-ARIA  https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/
 */
import { forwardRef, useRef } from "react";

import { useClickOutside, useKeyPress } from "@ode-react-ui/hooks";
import { Close } from "@ode-react-ui/icons";

import { ModalProps } from "./ModalProps";

/**
 * Modal Component
 */
const Root = forwardRef<HTMLDivElement, ModalProps>(
  (props: ModalProps, ref) => {
    const { isOpen, close, scrollable, children } = props;

    const modalRef = useRef(null);
    useClickOutside(modalRef, () => {
      if (typeof close === "function") {
        close();
      }
    });

    useKeyPress(() => {
      if (typeof close === "function") {
        close();
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

/**
 * Modal Header
 */
const ModalHeader = (props: { close: Function; children: React.ReactNode }) => {
  const { close, children } = props;
  return (
    <div className="modal-header">
      <h2 id="modal_label" className="modal-title">
        {children}
      </h2>
      <button
        type="button"
        className="btn btn-naked close"
        aria-label="Close"
        onClick={() => close()}
      >
        <Close title="Close" />
      </button>
    </div>
  );
};
ModalHeader.displayName = "ModalHeader";

/**
 * Modal Subtitle
 */
const ModalSubtitle = (props: { children: React.ReactNode }) => (
  <p className="modal-subtitle">{props.children}</p>
);
ModalSubtitle.displayName = "ModalSubtitle";

/**
 * Modal Body
 */
const ModalBody = (props: { children: React.ReactNode }) => (
  <div id="modal_desc" className="modal-body">
    {props.children}
  </div>
);
ModalBody.displayName = "ModalBody";

/**
 * Modal Footer
 */
const ModalFooter = (props: { children: React.ReactNode }) => (
  <div className="modal-footer">{props.children}</div>
);
ModalFooter.displayName = "ModalFooter";

const Modal = Object.assign({}, Root, {
  Header: ModalHeader,
  Subtitle: ModalSubtitle,
  Body: ModalBody,
  Footer: ModalFooter,
});

Modal.displayName = "Modal";

export default Modal;
