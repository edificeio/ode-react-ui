import {
  useRef,
  useState,
  useId,
  useEffect,
  useCallback,
  useMemo,
} from "react";

import { useTitle, useHover } from "@ode-react-ui/hooks";
import { IUserInfo, odeServices } from "ode-ts-client";

import { useBookmark } from "../useBookmark";
import { useHasWorkflow } from "../useHasWorkflow";
import { useI18n } from "../useI18n";

export default function useHeader({
  user,
  avatar,
}: {
  user: IUserInfo | undefined;
  avatar: string;
}): any {
  const { i18n } = useI18n();
  /**
   * All necessary refs
   */
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * Get document title for responsive usage
   */
  const title = useTitle();

  /**
   * Collapse helper for Responsive
   */
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  /**
   * useHover hook
   */
  const [appsRef, isAppsHovered] = useHover<HTMLLIElement>();
  const [searchRef, isSearchHovered] = useHover<HTMLLIElement>();

  /**
   * IDs for Popover Component
   */
  const popoverAppsId = useId();
  const popoverSearchId = useId();

  /**
   * Count conversation app
   */
  const [messages, setMessages] = useState<number>(0);

  /**
   * Get user info: avatar, username and welcome message
   */
  const userAvatar = avatar;
  const userName = user?.username;
  // const welcomeUser = `Bonjour ${user?.username}, bienvenue!`;
  const welcomeUser = `${i18n("welcome.text.1")} ${user?.username}`;

  /**
   * Get Bookmarked Apps
   */
  const bookmarkedApps = useBookmark();

  /**
   * Handle Header Workflows
   */
  const {
    workflows: { conversation, zimbra, community, search },
  } = useHasWorkflow();

  const communityWorkflow = community.view;
  const searchWorkflow = search.view;
  const conversationWorflow = conversation.view;
  const zimbraWorkflow = zimbra.view;
  const zimbraPreauth = zimbra.preauth;

  const [msgLink, setMsgLink] = useState<string>("");

  /**
   * Get message count for zimbra or chat app
   */
  const refreshMails = useCallback(async () => {
    if (zimbraWorkflow) {
      try {
        const response = await odeServices.http().get("/zimbra/count/INBOX", {
          queryParams: { unread: true, _: new Date().getTime() },
        });

        if (response.status !== 200) {
          setMessages(0);
        }

        setMessages(response.count);
      } catch (error) {
        console.error("error");
        setMessages(0);
      }
    } else {
      try {
        const response = await odeServices
          .http()
          .get("/conversation/count/INBOX", {
            queryParams: { unread: true, _: new Date().getTime() },
          });

        setMessages(response.count);
      } catch (error) {
        console.error("error");
        setMessages(0);
      }
    }
  }, [zimbraWorkflow]);

  const goToMessagerie = useCallback(() => {
    let messagerieLink = "";
    // FIXME This is the old-fashioned way of accessing preferences. Do not reproduce anymore (use ode-ts-client lib instead)
    odeServices
      .http()
      .get("/userbook/preference/zimbra")
      .then((data: { preference: string }) => {
        try {
          if (
            data.preference
              ? JSON.parse(data.preference).modeExpert && zimbraPreauth
              : false
          ) {
            messagerieLink = "/zimbra/preauth";
          } else {
            messagerieLink = window.location.origin + "/zimbra/zimbra";
          }
        } catch (e) {
          messagerieLink = "/zimbra/zimbra";
        }
      });

    setMsgLink(messagerieLink);
  }, [zimbraPreauth]);

  useEffect(() => {
    (async () => {
      try {
        await refreshMails();
      } catch (error) {
        console.error(error);
      }
    })();
    goToMessagerie();
  }, [goToMessagerie, refreshMails]);

  function redirectToSearch() {
    if (inputRef.current) {
      const value = inputRef.current.value;
      window.location.href = `/searchengine#/${value}`;
    }
  }

  const toggleCollapsedNav = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

  const handleLogout = async () => {
    await odeServices.session().logout();
    window.location.href = "/auth/login";
  };

  return useMemo(
    () => ({
      inputRef,
      conversation,
      zimbra,
      community,
      title,
      bookmarkedApps,
      appsRef,
      isAppsHovered,
      popoverAppsId,
      searchRef,
      isSearchHovered,
      popoverSearchId,
      messages,
      userAvatar,
      userName,
      welcomeUser,
      communityWorkflow,
      conversationWorflow,
      zimbraWorkflow,
      searchWorkflow,
      isCollapsed,
      msgLink,
      redirectToSearch,
      toggleCollapsedNav,
      handleLogout,
    }),
    [
      appsRef,
      bookmarkedApps,
      community,
      communityWorkflow,
      conversation,
      conversationWorflow,
      isAppsHovered,
      isCollapsed,
      isSearchHovered,
      messages,
      msgLink,
      popoverAppsId,
      popoverSearchId,
      searchRef,
      searchWorkflow,
      title,
      toggleCollapsedNav,
      userAvatar,
      userName,
      welcomeUser,
      zimbra,
      zimbraWorkflow,
    ],
  );
}
