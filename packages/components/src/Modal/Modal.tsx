/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/**
 * Modal Component
 *
 * @see Docs      https://ode-react-ui.vercel.app/?path=/docs/components-core-modal--primary
 * @see Source    https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/Modal/Modal.tsx
 * @see WAI-ARIA  https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/
 */
import { forwardRef, useEffect } from "react";

import {
  useClickOutside,
  useKeyPress,
  useTrapFocus,
} from "@ode-react-ui/hooks";
import { useTransition, animated } from "@react-spring/web";
import clsx from "clsx";

import ModalBody from "./ModalBody";
import { ModalContext, ModalContextProps } from "./ModalContext";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import ModalSubtitle from "./ModalSubtitle";

export type ModalSize = "md" | "lg" | "xl";

export interface ModalProps {
  /**
   * Modal id (useful when multiple modal on the same page)
   */

  id: string;

  /**
   * Is Modal Open
   */
  isOpen: boolean;

  /**
   * Function to call when closing modal
   */
  onModalClose: () => void;

  /**
   * Size of the modal (width)
   */
  size?: ModalSize;

  /**
   * Is modal scrollable (see https://getbootstrap.com/docs/5.0/components/modal/#scrolling-long-content)
   */
  scrollable?: boolean;

  /**
   * ID of the HTML element to receive focus when modal is active.
   */
  focusId?: string;

  /**
   * Children
   */
  children: React.ReactNode;
}

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
      focusId,
      children,
    } = props;

    const ariaLabelId = `aria_label_${id}`;
    const ariaDescriptionId = `aria_desc_${id}`;

    const modalRef = useClickOutside(onModalClose);

    useKeyPress(onModalClose, ["Escape"]);

    useEffect(() => {
      if (isOpen) {
        // a11y: trap focus into modal
        useTrapFocus(modalRef);
        // a11y: prevent body scrolling while modale is active
        document.body.style.overflow = "hidden";
        // a11y: set focus to focusId element
        // (if focusId is not setted then focus will go to close button at top right corner cf. ModalHeader)
        if (focusId) {
          const elem = document.getElementById(focusId);
          elem?.focus();
        }
      }

      return () => {
        document.body.style.overflow = "";
      };
    }, []);

    const dialogClasses = clsx("modal-dialog", {
      [`modal-${size}`]: size,
      "modal-dialog-scrollable": scrollable,
    });

    const modalContextValue: ModalContextProps = {
      ariaLabelId,
      ariaDescriptionId,
      focusId,
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
                <div id={`${id}_ref`} ref={modalRef} className={dialogClasses}>
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
