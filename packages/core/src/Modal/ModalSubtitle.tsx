/**
 * Modal Subtitle
 */
const ModalSubtitle = (props: ModalSubtitleProps) => (
  <p className="modal-subtitle">{props.children}</p>
);

ModalSubtitle.displayName = "ModalSubtitle";

export default ModalSubtitle;

export interface ModalSubtitleProps {
  children: React.ReactNode;
}
