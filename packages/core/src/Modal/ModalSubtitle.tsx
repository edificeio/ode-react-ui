import { ReactNode } from "react";

/**
 * Modal Subtitle
 */
const ModalSubtitle = (props: ModalSubtitleProps) => (
  <p className="modal-subtitle">{props.children}</p>
);

ModalSubtitle.displayName = "Modal.Subtitle";

export default ModalSubtitle;

export interface ModalSubtitleProps {
  children: ReactNode;
}
