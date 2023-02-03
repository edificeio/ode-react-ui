/**
 * Dropdown  Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-dropdown--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/Dropdown/Dropdown.tsx
 */

import React, { useState } from "react";

import clsx from "clsx";
import { usePopper } from "react-popper";

import { DropdownProps } from "./DropdownProps";

const Dropdown = ({ trigger, content }: DropdownProps) => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null,
  );
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null,
  );

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-start",
  });

  const [visible, setVisible] = useState<boolean>(true);

  const clonedTrigger = React.cloneElement(trigger, {
    ref: setReferenceElement,
    onClick: () => {
      console.log(5545);
      setVisible((oldState) => !oldState);
    },
    state: visible ? "selected" : "default",
  });

  return (
    <>
      {clonedTrigger}

      {visible && (
        <div
          className={clsx("tooltip d-block show", `bs-tooltip-auto`)}
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          {content}
        </div>
      )}
    </>
  );
};
Dropdown.displayName = "Dropdown";
export default Dropdown;
