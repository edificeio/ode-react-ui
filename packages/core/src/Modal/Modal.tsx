/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/**
 * Modal Component
 *
 * @see Docs      https://ode-react-ui.vercel.app/?path=/docs/components-core-modal--primary
 * @see Source    https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/Modal/Modal.tsx
 * @see WAI-ARIA  https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/
 */
import { forwardRef } from "react";

import { useClickOutside, useKeyPress } from "@ode-react-ui/hooks";
import { useTransition, animated } from "@react-spring/web";
import clsx from "clsx";

import ModalBody from "./ModalBody";
import { ModalContext } from "./ModalContext";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import { ModalProps } from "./ModalProps";
import ModalSubtitle from "./ModalSubtitle";

/**
 * Modal Component
 */
const Root = forwardRef<HTMLDivElement, ModalProps>(
  (props: ModalProps, ref) => {
    const {
      id,
      isOpen,
      onModalClose,
      size = "md",
      scrollable,
      children,
    } = props;

    const ariaLabelId = `aria_label_${id}`;
    const ariaDescriptionId = `aria_desc_${id}`;

    const modalRef = useClickOutside(onModalClose);

    useKeyPress(() => {
      onModalClose();
    }, ["Escape"]);

    const dialogClasses = clsx("modal-dialog", {
      [`modal-${size}`]: size,
      "modal-dialog-scrollable": scrollable,
    });

    const modalContextValue = {
      ariaLabelId,
      ariaDescriptionId,
    };

    const transition = useTransition(isOpen, {
      from: {
        x: -50,
        opacity: 0,
      },
      enter: {
        x: 0,
        opacity: 1,
      },
      leave: {
        x: 50,
        opacity: 0,
      },
    });

    return (
      <ModalContext.Provider value={modalContextValue}>
        {transition((style, isOpen) => (
          <>
            {isOpen && (
              <animated.div
                id={id}
                ref={ref}
                role="dialog"
                aria-modal="true"
                aria-labelledby={ariaLabelId}
                aria-describedby={ariaDescriptionId}
                className={`modal fade ${isOpen ? "show d-block" : ""}`}
                style={style}
                tabIndex={-1}
              >
                <div ref={modalRef} className={dialogClasses}>
                  <div className="modal-content">{children}</div>
                </div>
              </animated.div>
            )}
            {isOpen && (
              <animated.div
                className="modal-backdrop fade show"
                style={{ opacity: 0.65 }}
              ></animated.div>
            )}
          </>
        ))}
      </ModalContext.Provider>
    );
  },
);

const Modal = Object.assign(Root, {
  Header: ModalHeader,
  Subtitle: ModalSubtitle,
  Body: ModalBody,
  Footer: ModalFooter,
});

Root.displayName = "Modal";

export default Modal;
