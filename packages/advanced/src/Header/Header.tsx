import {
  Logo,
  SearchButton,
  Popover,
  PopoverBody,
  PopoverFooter,
  Avatar,
  useOdeClient,
} from "@ode-react-ui/core";
import { RafterDown } from "@ode-react-ui/icons";
import {
  Search,
  Community,
  Disconnect,
  Home,
  NeoMessaging,
  MyApps,
  // NeoAssistance as Assistance,
  NewRelease,
  OneMessaging,
  OneProfile,
  Userbook,
} from "@ode-react-ui/icons/nav";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";

import { Badge } from "./Badge";
import { Navbar } from "./Navbar";
import { NavBarNav } from "./NavbarNav";
import { NavItem } from "./NavItem";
import { NavLink } from "./NavLink";
import { NavSearch } from "./NavSearch";
import { useHeader } from "./useHeader";
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
  const {
    inputRef,
    collapseRef,
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
  } = useHeader({ session, http, configurationFramework });

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
                    <a href="/conversation/conversation" className="nav-link">
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
                {/* <NavItem>
                  <a href="/" className="nav-link">
                    <Assistance className="icon help" />
                    <span className="visually-hidden">
                      {i18n("navbar.help")}
                    </span>
                  </a>
                </NavItem> */}
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
            <NavLink link="/" className="navbar-title d-md-none">
              {title}
            </NavLink>
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
                    link="/conversation/conversation"
                    translate={i18n("conversation")}
                  >
                    <NeoMessaging color="#fff" />
                    <Badge>{messages}</Badge>
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
                    <Badge>{messages}</Badge>
                  </NavLink>
                </NavItem>
              )}
              {/* <NavItem>
                <NavLink link="/" translate={i18n("support")}>
                  <Assistance color="#fff" />
                </NavLink>
              </NavItem> */}
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
