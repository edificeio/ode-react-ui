import * as hooks from "@ode-react-ui/hooks";
import * as apps from "@ode-react-ui/icons/apps";

import { AppProps } from "./IconContextProps";

export const useIconContext = (app: AppProps<string, boolean>) => {
  const { useOdeIcons } = hooks;
  const { getIconComponent } = useOdeIcons();
  const { Placeholder } = apps;

  if (!app.icon) return <Placeholder />;

  const icon = getIconComponent(app, apps);

  if (icon) {
    const AppIcon = icon;
    return <AppIcon />;
  }

  return <img src={app.icon} alt={app.displayName} width="40" height="40" />;
};

useIconContext.displayName = "useIconContext";

export default useIconContext;
