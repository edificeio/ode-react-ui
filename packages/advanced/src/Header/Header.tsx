/* eslint-disable @typescript-eslint/no-floating-promises */
import { useRef, useState, useId, useEffect } from "react";

import {
  Logo,
  SearchButton,
  Popover,
  PopoverBody,
  PopoverFooter,
  Avatar,
  useOdeClient,
} from "@ode-react-ui/core";
import {
  useBookmark,
  useClickOutside,
  useHasWorkflow,
  useHover,
  useTitle,
} from "@ode-react-ui/hooks";
import { RafterDown } from "@ode-react-ui/icons";
import {
  Search,
  Community,
  Disconnect,
  Home,
  NeoMessaging,
  MyApps,
  NeoAssistance as Assistance,
  NewRelease,
  OneMessaging,
  OneProfile,
  Userbook,
} from "@ode-react-ui/icons/nav";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";

import { Navbar } from "./Navbar";
import { NavBarNav } from "./NavbarNav";
import { NavItem } from "./NavItem";
import { NavLink } from "./NavLink";
import { NavSearch } from "./NavSearch";
import { WidgetAppsBody, WidgetAppsFooter } from "./WidgetApps";

interface HeaderProps {
  is1d?: boolean;
  src: string;
  configurationFramework: any;
}

export default function Header({
  is1d = false,
  src = "",
  configurationFramework,
}: HeaderProps): JSX.Element {
  const { http, session, i18n } = useOdeClient();
  // const { hotToast } = useHotToast(Alert);

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

  const classes = clsx("header header-react", {
    "no-2d": is1d,
    "no-1d": !is1d,
  });

  return (
    <header className={classes}>
      {is1d ? (
        <>
          <div className="container-fluid">
            <Navbar>
              <a className="navbar-title d-md-none text-truncate h4" href="/">
                {title}
              </a>
              <div className="d-none d-md-inline-flex gap-12 align-items-center">
                <Avatar
                  alt={userName}
                  size="sm"
                  src={userAvatar}
                  variant="circle"
                />
                <span className="navbar-text">{welcomeUser}</span>
              </div>
              <NavBarNav
                className="gap-8"
                aria-hidden="false"
                aria-label={i18n("navbar.main.navigation")}
                role="menubar"
              >
                {conversationWorflow && (
                  <NavItem>
                    <a href="/" className="nav-link">
                      <OneMessaging className="icon notification" />
                      <span className="position-absolute badge rounded-pill bg-danger">
                        {messages}
                        <span className="visually-hidden">
                          {i18n("navbar.messages")}
                        </span>
                      </span>
                    </a>
                  </NavItem>
                )}
                <NavItem>
                  <a href="/userbook/mon-compte" className="nav-link">
                    <OneProfile className="icon user" />
                    <span className="visually-hidden">
                      {i18n("navbar.myaccount")}
                    </span>
                  </a>
                </NavItem>
                <NavItem>
                  <a href="/" className="nav-link">
                    <Assistance className="icon help" />
                    <span className="visually-hidden">
                      {i18n("navbar.help")}
                    </span>
                  </a>
                </NavItem>
                <NavItem>
                  <a href="/" className="nav-link">
                    <Disconnect className="icon logout" />
                    <span className="visually-hidden">
                      {i18n("navbar.disconnect")}
                    </span>
                  </a>
                </NavItem>
                <NavItem className="d-md-none">
                  <button
                    ref={collapseRef}
                    className="nav-link btn btn-naked"
                    type="button"
                    aria-controls="navbarCollapsed"
                    aria-expanded={!isCollapsed}
                    aria-label={i18n("navbar.secondary.navigation")}
                    onClick={toggleCollapsedNav}
                  >
                    <RafterDown
                      className="icon rafter-down"
                      width="20"
                      height="20"
                    />
                  </button>
                </NavItem>
              </NavBarNav>
            </Navbar>
          </div>
          <Navbar
            className="no-2d navbar-secondary navbar-expand-md"
            aria-label={i18n("navbar.secondary.navigation")}
          >
            <div className="container-fluid">
              <div
                className={`collapse navbar-collapse ${
                  !isCollapsed ? "show" : ""
                }`}
                id="navbarCollapsed"
              >
                <Logo
                  is1d
                  src={`${src}/img/illustrations/logo.png`}
                  translate={i18n("navbar.home")}
                />

                <NavBarNav className="gap-8">
                  <NavItem>
                    <a href="/" className="button">
                      <NewRelease color="#fff" className="d-md-none" />
                      <span className="d-inline-block">
                        {i18n("portal.header.navigation.whatsnew")}
                      </span>
                    </a>
                  </NavItem>
                  <NavItem>
                    <a href="/" className="button">
                      <Userbook color="#fff" className="d-md-none" />
                      <span className="d-inline-block">
                        {i18n("portal.header.navigation.classMembers")}
                      </span>
                    </a>
                  </NavItem>
                  <NavItem>
                    <a href="/" className="button">
                      <MyApps color="#fff" className="d-md-none" />
                      <span className="d-inline-block">
                        {i18n("portal.header.navigation.myapps")}
                      </span>
                    </a>
                  </NavItem>
                </NavBarNav>
              </div>
            </div>
          </Navbar>
        </>
      ) : (
        <Navbar className="navbar-expand-md">
          <div className="container-fluid">
            <Logo src={`${src}/img/illustrations/logo.png`} />
            <a href="/" className="navbar-title d-md-none">
              {title}
            </a>
            <ul className="navbar-nav">
              <NavItem>
                <NavLink link="/" translate={i18n("navbar.home")}>
                  <Home color="#fff" />
                </NavLink>
              </NavItem>
              <NavItem
                className="position-relative"
                ref={appsRef}
                id={popoverAppsId}
                aria-haspopup="true"
                aria-expanded={isAppsHovered}
              >
                <NavLink
                  link="/welcome"
                  translate={i18n("navbar.applications")}
                >
                  <MyApps color="#fff" />
                </NavLink>
                <AnimatePresence>
                  {isAppsHovered ? (
                    <Popover className="top-100" id={popoverAppsId}>
                      <PopoverBody>
                        <WidgetAppsBody bookmarkedApps={bookmarkedApps} />
                      </PopoverBody>
                      <PopoverFooter className="widget-footer border-top border-ghost">
                        <WidgetAppsFooter />
                      </PopoverFooter>
                    </Popover>
                  ) : null}
                </AnimatePresence>
              </NavItem>
              {conversationWorflow && (
                <NavItem>
                  <NavLink
                    className="position-relative"
                    link="/"
                    translate={i18n("conversation")}
                  >
                    <NeoMessaging color="#fff" />
                    <span className="position-absolute badge rounded-pill bg-warning">
                      {messages}
                      <span className="visually-hidden">
                        {i18n("navbar.messages")}
                      </span>
                    </span>
                  </NavLink>
                </NavItem>
              )}
              {zimbraWorkflow && (
                <NavItem>
                  <NavLink
                    className="position-relative"
                    link={msgLink}
                    translate={i18n("conversation")}
                  >
                    <NeoMessaging color="#fff" />
                    <span className="position-absolute badge rounded-pill bg-warning">
                      {messages}
                      <span className="visually-hidden">
                        {i18n("navbar.messages")}
                      </span>
                    </span>
                  </NavLink>
                </NavItem>
              )}
              <NavItem>
                <NavLink link="/" translate={i18n("support")}>
                  <Assistance color="#fff" />
                </NavLink>
              </NavItem>
              <NavItem>
                <div className="dropdown">
                  <button
                    ref={collapseRef}
                    className="nav-link btn btn-naked d-md-none"
                    type="button"
                    aria-controls="dropdown-navbar"
                    aria-expanded={!isCollapsed}
                    // TODO: add i18n key
                    aria-label={i18n("navbar.open.menu")}
                    onClick={toggleCollapsedNav}
                  >
                    <RafterDown
                      className="icon rafter-down"
                      width="20"
                      height="20"
                      color="#fff"
                    />
                  </button>
                  <ul
                    className={`dropdown-menu dropdown-menu-end ${
                      !isCollapsed ? "show" : ""
                    }`}
                    id="dropdown-navbar"
                  >
                    {communityWorkflow && (
                      <NavItem>
                        <NavLink
                          link="/"
                          className="dropdown-item"
                          translate={i18n("navbar.community")}
                        >
                          <Community className="icon community" />
                        </NavLink>
                      </NavItem>
                    )}
                    {searchWorkflow && (
                      <NavItem
                        id={popoverSearchId}
                        className="position-relative"
                        ref={searchRef}
                        aria-haspopup="true"
                        aria-expanded={isSearchHovered}
                      >
                        <NavLink
                          link="/searchengine"
                          className="dropdown-item"
                          translate={i18n("navbar.search")}
                        >
                          <Search className="icon search" />
                        </NavLink>
                        <AnimatePresence>
                          {isSearchHovered ? (
                            <Popover id={popoverSearchId}>
                              <NavSearch ref={inputRef}>
                                <SearchButton
                                  type="submit"
                                  size="sm"
                                  onClick={redirectToSearch}
                                  aria-label={i18n("explorer.label.search")}
                                />
                              </NavSearch>
                            </Popover>
                          ) : null}
                        </AnimatePresence>
                      </NavItem>
                    )}
                    <NavItem>
                      <NavLink
                        link="/userbook/mon-compte"
                        className="dropdown-item"
                        translate={i18n("navbar.myaccount")}
                      >
                        <Avatar
                          alt={userName}
                          size="sm"
                          src={userAvatar}
                          variant="circle"
                          className="bg-white"
                        />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <hr className="dropdown-divider" />
                    </NavItem>
                    <NavItem>
                      <NavLink
                        link="/"
                        className="dropdown-item"
                        translate={i18n("navbar.disconnect")}
                      >
                        <Disconnect className="icon logout" />
                      </NavLink>
                    </NavItem>
                  </ul>
                </div>
              </NavItem>
            </ul>
          </div>
        </Navbar>
      )}
    </header>
  );
}
