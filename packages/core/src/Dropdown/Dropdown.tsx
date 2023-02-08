/**
 * Dropdown  Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-dropdown--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/Dropdown/Dropdown.tsx
 */

import React, { useEffect, useState } from "react";

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
    modifiers: [{ name: "offset", options: { offset: [0, 12] } }],
  });

  const [visible, setVisible] = useState<boolean>(false);

  const clonedTrigger = React.cloneElement(trigger, {
    ref: setReferenceElement,
    onClick: () => {
      setVisible((oldState) => !oldState);
    },
    state: visible ? "selected" : "default",
  });

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        popperElement &&
        !popperElement.contains(event.target as Node) &&
        referenceElement &&
        !referenceElement.contains(event.target as Node)
      ) {
        setVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside, true);
    document.addEventListener("touchstart", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
      document.removeEventListener("touchstart", handleClickOutside, true);
    };
  }, [popperElement]);

  return (
    <>
      {clonedTrigger}

      {visible && (
        <div
          className={clsx(
            "bg-white shadow rounded d-block show py-12 px-8",
            `bs-tooltip-auto`,
          )}
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
