/**
 * Actions Bar  Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-actionsbar--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/ActionsBar/ActionsBar.tsx
 */
import { forwardRef, Ref } from "react";

import { ActionBarProps } from "./ActionBarProps";

const ActionBar = forwardRef(
  ({ children }: ActionBarProps, ref: Ref<HTMLDivElement>) => {
    return (
      <div ref={ref} className="actionbar">
        {children}
      </div>
    );
  },
);

ActionBar.displayName = "ActionBar";
export default ActionBar;
