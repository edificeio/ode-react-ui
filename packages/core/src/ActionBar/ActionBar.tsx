/**
 * Actions Bar  Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-actionsbar--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/ActionsBar/ActionsBar.tsx
 */
import { ActionBarProps } from "./ActionBarProps";

const ActionBar = ({ children }: ActionBarProps) => {
  return <div className="actionbar">{children}</div>;
};

export default ActionBar;
