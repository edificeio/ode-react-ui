/**
 * Dropdown  Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-dropdown--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/Dropdown/Dropdown.tsx
 */

import { RafterDown } from "@ode-react-ui/icons";
import clsx from "clsx";

import { DropdownTriggerProps } from "./DropdownTriggerProps";

const DropdownTrigger: React.FC<DropdownTriggerProps> = ({
  title = "",
  state,
  style,
  icon,
  size = "lg",
}: DropdownTriggerProps) => {
  const classNames = clsx("dropdown-trigger", state, size, style);

  return (
    <div className={classNames}>
      <div className="dropdown-trigger-icon">{icon && icon}</div>
      <div>{title}</div>
      <div className="dropdown-trigger-carret-icon">
        {<RafterDown width={16} height={16} />}
      </div>
    </div>
  );
};

export default DropdownTrigger;
