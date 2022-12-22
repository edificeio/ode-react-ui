import { useOdeIcons } from "@ode-react-ui/hooks";
import clsx from "clsx";

import useAppCard from "./AppCardContext";
import { AppIconProps } from "./AppIconProps";

/**
 * Icon Component used to display the icon of an application
 */
const AppIcon = ({
  title,
  size = "24",
  color = "currentColor",
  ...props
}: AppIconProps) => {
  const { isIconUrl } = useOdeIcons();
  const { code, displayName, icon } = useAppCard();

  const classes = clsx("icon", code || "");

  if (isIconUrl(icon)) {
    return <img src={icon} alt={displayName} width={size} height={size} />;
  }

  return (
    <svg
      width={size}
      height={size}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={classes}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <use xlinkHref={`apps.svg#${code || "placeholder"}`} />
    </svg>
  );
};

AppIcon.displayName = "AppCard.Icon";

export default AppIcon;
