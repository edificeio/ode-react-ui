/**
 * Tooltip  Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-tooltip--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/Tooltip/Tooltip.tsx
 */

import { useState } from "react";

import clsx from "clsx";
import { usePopper } from "react-popper";

import { TooltipProps } from "./TooltipProps";

const Tooltip = ({
  children,
  message,
  icon = null,
  placement = "auto",
}: TooltipProps) => {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null,
  );
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null,
  );
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      {
        name: "arrow",
        options: {
          element: arrowElement,
        },
      },
    ],
  });

  const [visible, setVisible] = useState<boolean>(false);
  console.log(attributes.popper);

  return (
    <>
      <div
        className="d-inline-block"
        ref={setReferenceElement}
        onMouseEnter={() => {
          setVisible(true);
        }}
        onMouseLeave={() => {
          setVisible(false);
        }}
      >
        {children}
      </div>
      {visible && (
        <div
          className={clsx("tooltip d-block show", `bs-tooltip-auto`)}
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <div className="tooltip-inner shadow-hover d-flex gap-8 align-items-center">
            {icon && icon}
            <div>{message}</div>
          </div>
          <div
            className="tooltip-arrow"
            ref={setArrowElement}
            style={styles.arrow}
          ></div>
        </div>
      )}
    </>
  );
};

export default Tooltip;
