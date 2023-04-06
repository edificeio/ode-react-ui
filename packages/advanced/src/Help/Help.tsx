import { Modal, useOdeClient } from "@ode-react-ui/core";
import { createPortal } from "react-dom";

import { HelpProps } from "./interface";

export default function Help({
  isHelpOpen,
  setIsHelpOpen,
  parsedHeadline,
  parsedContent,
  error,
}: HelpProps): JSX.Element {
  const { i18n } = useOdeClient();

  return createPortal(
    <Modal
      isOpen={isHelpOpen}
      onModalClose={() => {
        setIsHelpOpen(false);
      }}
      id="help-modal"
      scrollable
      size="xl"
    >
      <Modal.Header
        onModalClose={() => {
          setIsHelpOpen(false);
        }}
      >
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
  );
}
