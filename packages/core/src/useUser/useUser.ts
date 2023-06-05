import { IUserDescription, IUserInfo } from "ode-ts-client";

import { useOdeClient } from "../OdeClientProvider";
import { useTheme } from "../useTheme";

export interface useUserProps {
  user: IUserInfo | undefined;
  avatar: string;
  userDescription: IUserDescription | undefined;
}

export default function useUser(): useUserProps {
  const { user, userDescription, userProfile } = useOdeClient();
  const { basePath } = useTheme();

  function avatarUrl(): string {
    let avatar = userDescription?.picture;
    if (!avatar || avatar === "no-avatar.jpg" || avatar === "no-avatar.svg") {
      avatar = `${basePath}/img/illustrations/no-avatar.svg`;
    }
    return avatar;
  }

  return {
    user: {
      ...user,
      type: userProfile,
    },
    avatar: avatarUrl(),
    userDescription,
  };
}
