/**
 * Dropdown  Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-dropdown--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/Dropdown/DropdownTrigger.tsx
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/button/
 */

import { forwardRef, Ref } from "react";

import { RafterUp } from "@ode-react-ui/icons";
import clsx from "clsx";

import { DropdownTriggerProps } from "./DropdownTriggerProps";

const DropdownTrigger = forwardRef(
  (
    {
      title = "",
      state,
      variant,
      icon,
      size = "lg",
      grow = false,
      badgeContent,
      ...props
    }: DropdownTriggerProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    const classNames = clsx(
      "dropdown-trigger",
      state,
      size,
      variant,
      grow && "flex-grow-1 justify-content-between",
    );

    return (
      <button ref={ref} className={classNames} {...props} type="button">
        {icon && <div className="dropdown-trigger-icon">{icon}</div>}
        <div>{title}</div>
        {badgeContent ? (
          <div>
            <span className="badge text-bg-secondary  rounded-pill">
              {badgeContent}
            </span>
          </div>
        ) : (
          <div className="dropdown-trigger-carret-icon">
            {<RafterUp width={16} height={16} />}
          </div>
        )}
      </button>
    );
  },
);
DropdownTrigger.displayName = "DropdownTrigger";
export default DropdownTrigger;
