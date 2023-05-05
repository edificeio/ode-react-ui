import { useRef, useState, useId, useEffect } from "react";

import {
  // useClickOutside,
  useTitle,
  useHover,
  useBookmark,
  useHasWorkflow,
} from "@ode-react-ui/hooks";
import {
  IConfigurationFramework,
  IHttp,
  ISession,
  odeServices,
} from "ode-ts-client";

export function useHeader({
  session,
  configurationFramework,
  http,
}: {
  session: ISession;
  configurationFramework: IConfigurationFramework;
  http: IHttp;
}): any {
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
  const zimbraPreauth = zimbra.preauth;

  useEffect(() => {
    (async () => {
      try {
        await refreshMails();
      } catch (error) {
        console.error(error);
      }
    })();
    goToMessagerie();
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
          // hotToast.error("something wrong happened!");
          setMessages(0);
        }

        setMessages(response.count);
      } catch (error) {
        console.error("error");
        // hotToast.error("something wrong happened!");
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
        // hotToast.error("something wrong happened!");
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

  const handleLogout = () => {
    (async () => {
      await odeServices.session().logout();
      window.location.href = "/auth/login";
    })();
  };

  const [msgLink, setMsgLink] = useState<string>("");
  function goToMessagerie(): void {
    let messagerieLink = "";
    // FIXME This is the old-fashioned way of accessing preferences. Do not reproduce anymore (use ode-ts-client lib instead)
    http
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
  }

  return {
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
  };
}
