import { Modal } from "@ode-react-ui/components";
import { useOdeClient } from "@ode-react-ui/core";
import { createPortal } from "react-dom";

export interface HelpProps {
  isHelpOpen: boolean;
  parsedHeadline: any;
  parsedContent: any;
  error: boolean;
  setIsHelpOpen: (state: boolean) => void;
}

export default function Help({
  isHelpOpen,
  setIsHelpOpen,
  parsedHeadline,
  parsedContent,
  error,
}: HelpProps): JSX.Element | null {
  const { i18n } = useOdeClient();

  const handleHelpOpen = () => {
    setIsHelpOpen(false);
  };

  return isHelpOpen
    ? createPortal(
        <Modal
          id="help-modal"
          isOpen={isHelpOpen}
          onModalClose={handleHelpOpen}
          scrollable
          size="xl"
        >
          <Modal.Header onModalClose={handleHelpOpen}>
            {i18n("navbar.help")}
          </Modal.Header>
          <Modal.Subtitle>
            {error ? i18n("help.notfound.title") : parsedHeadline}
          </Modal.Subtitle>
          <Modal.Body className={error ? "d-flex" : null}>
            {error ? i18n("help.notfound.text") : parsedContent}
          </Modal.Body>
        </Modal>,
        document.getElementById("portal") as HTMLElement,
      )
    : null;
}
