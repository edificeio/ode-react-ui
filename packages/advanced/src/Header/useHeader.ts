/* eslint-disable @typescript-eslint/no-floating-promises */
import { useState, useId, useRef, useEffect } from "react";

import {
  useClickOutside,
  useTitle,
  useHover,
  useHasWorkflow,
  useBookmark,
} from "@ode-react-ui/hooks";
import { IConfigurationFramework, IHttp, type ISession } from "ode-ts-client";

export function useHeader(
  configurationFramework: IConfigurationFramework,
  http: IHttp,
  session: ISession,
  hotToast: any,
) {
  /**
   * All necessary refs
   */
  const collapseRef = useClickOutside(() => {
    setIsCollapsed(true);
  });
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
  const userAvatar = session?.avatarUrl;
  const userName = session?.user?.username;
  const welcomeUser = `Bonjour ${session?.user?.username}, bienvenue!`;

  /**
   * Get Bookmarked Apps
   */
  const bookmarkedApps = useBookmark(configurationFramework);

  /**
   * Handle Header Workflows
   */
  const {
    workflows: { conversation, zimbra, community, search },
  } = useHasWorkflow(session);

  const communityWorkflow = community.view;
  const searchWorkflow = search.view;
  const conversationWorflow = conversation.view;
  const zimbraWorkflow = zimbra.view;

  useEffect(() => {
    (async () => {
      await refreshMails();
    })();
  }, []);

  /**
   * Get message count for zimbra or chat app
   */
  async function refreshMails() {
    if (zimbraWorkflow) {
      try {
        const response = await http.get("/zimbra/count/INBOX", {
          queryParams: { unread: true, _: new Date().getTime() },
        });

        if (response.status !== 200) {
          hotToast.error("something wrong happened!");
          setMessages(0);
        }

        setMessages(response.count);
      } catch (error) {
        console.error("error");
        hotToast.error("something wrong happened!");
        setMessages(0);
      }
    } else {
      try {
        const response = await http.get("/conversation/count/INBOX", {
          queryParams: { unread: true, _: new Date().getTime() },
        });

        setMessages(response.count);
      } catch (error) {
        console.error("error");
        hotToast.error("something wrong happened!");
        setMessages(0);
      }
    }
  }

  function redirectToSearch() {
    if (inputRef.current) {
      const value = inputRef.current.value;
      window.location.href = `/searchengine#/${value}`;
    }
  }

  function toggleCollapsedNav() {
    setIsCollapsed(!isCollapsed);
  }

  return {
    inputRef,
    collapseRef,
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
    redirectToSearch,
    toggleCollapsedNav,
  };
}
