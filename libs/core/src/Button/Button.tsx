/**
 * TreeView Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/story/components-core-button--primary
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/libs/core/src/Button/Button.tsx
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/button/
 */

import { ButtonProps } from "./ButtonProps";
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "btn-primary" : "btn-secondary";
  return (
    <button
      type="button"
      className={["btn", `btn-${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
