/**
 * Dropdown  Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-dropdown--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/Dropdown/Dropdown.tsx
 */

import { useState } from "react";

import clsx from "clsx";
import { usePopper } from "react-popper";

import { DropdownProps } from "./DropdownProps";

const Dropdown = ({ children, content }: DropdownProps) => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null,
  );
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null,
  );

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-start",
  });

  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <button
        className="d-inline-block"
        ref={setReferenceElement}
        onClick={() => {
          setVisible((oldState) => !oldState);
        }}
      >
        {children}
      </button>
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

export default Dropdown;
