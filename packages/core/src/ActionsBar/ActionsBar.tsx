/**
 * Actions Bar  Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-actionsbar--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/ActionsBar/ActionsBar.tsx
 */
import { ActionsBarProps } from "./ActionsBarProps";

const ActionsBar = ({ children }: ActionsBarProps) => {
  return <div className="bg-primary p-16 text-white">{children}</div>;
};

export default ActionsBar;
