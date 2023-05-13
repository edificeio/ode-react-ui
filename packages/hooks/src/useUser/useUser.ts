import { App, IUserDescription, UserProfile, IUserInfo } from "ode-ts-client";

import { useSession } from "../useSession";
import { useTheme } from "../useTheme";

export interface useUserProps {
  user: IUserInfo | undefined;
  avatar: string;
  userLoading: boolean;
  userSuccess: boolean;
  userDescription: IUserDescription | undefined;
  userProfile: UserProfile | undefined;
}

/** Custom Hook for ode-ts-client integration */
export default function useUser({ appCode }: { appCode: App }): useUserProps {
  const sessionQuery = useSession();
  const { theme } = useTheme({ appCode });

  const userDescription = sessionQuery.data?.userDescription;
  const userProfile = sessionQuery.data?.userProfile;

  function avatarUrl(): string {
    let avatar = userDescription?.photo;
    if (!avatar || avatar === "no-avatar.jpg" || avatar === "no-avatar.svg") {
      const basePath = theme?.basePath;
      avatar = `${basePath}/img/illustrations/no-avatar.svg`;
    }
    return avatar;
  }

  return {
    user: sessionQuery.data?.user,
    avatar: avatarUrl(),
    userLoading: sessionQuery.isLoading,
    userSuccess: sessionQuery.isSuccess,
    userDescription,
    userProfile,
  };
}
