import { ReactNode } from "react";

import { Loading } from "@ode-react-ui/icons";

import { LoadingButtonProps, LoadingPosition } from "./ButtonProps";

export const LoadingButton = ({
  loadingIcon,
  loadingPosition,
  children,
}: {
  loadingIcon: LoadingButtonProps;
  loadingPosition: LoadingPosition;
  children?: ReactNode;
}): JSX.Element => {
  if (loadingIcon) return <span>{loadingIcon}</span>;

  return (
    <span>
      {(!loadingPosition || loadingPosition === "left") && (
        <Loading aria-label="Loading" />
      )}
      {children}
      {loadingPosition === "right" && <Loading aria-label="Loading" />}
    </span>
  );
};

export default LoadingButton;
