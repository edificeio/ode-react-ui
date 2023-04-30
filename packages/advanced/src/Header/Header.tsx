import {
  VisuallyHidden,
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
  NewRelease,
  OneMessaging,
  OneProfile,
  Userbook,
  OneAssistance as Assistance,
  NeoAssistance,
} from "@ode-react-ui/icons/nav";
import clsx from "clsx";

import { Help } from "../Help";
import { useHelp } from "../Help/useHelp";
import { Badge } from "./Badge";
import { HeaderProps } from "./interface";
import { Navbar } from "./Navbar";
import { NavBarNav } from "./NavbarNav";
import { NavItem } from "./NavItem";
import { NavLink } from "./NavLink";
import { NavSearch } from "./NavSearch";
import { useHeader } from "./useHeader";
import { WidgetAppsBody, WidgetAppsFooter } from "./WidgetApps";

export default function Header({
  is1d = false,
  src = "",
  configurationFramework,
}: HeaderProps): JSX.Element {
  const { http, session, i18n } = useOdeClient();
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
    handleLogout,
  } = useHeader({ session, http, configurationFramework });

  const {
    isModalOpen: isHelpOpen,
    setIsModalOpen: setIsHelpOpen,
    parsedContent,
    parsedHeadline,
    error,
  } = useHelp();

  const classes = clsx("header header-react", {
    "no-2d": is1d,
    "no-1d": !is1d,
  });

  const hasMessages = messages > 0;

  return (
    <header className={classes}>
      {is1d ? (
        <>
          <div className="container-fluid">
            <Navbar>
              <a
                className="navbar-title d-md-none text-truncate h4"
                href="/timeline/timeline"
              >
                {title}
              </a>
              <div className="d-none d-md-inline-flex gap-12 align-items-center">
                <Avatar
                  alt={userName}
                  size="sm"
                  src={userAvatar}
                  variant="circle"
                  width="32"
                  height="32"
                />
                <span className="navbar-text">{welcomeUser}</span>
              </div>
              <NavBarNav
                className="gap-8"
                aria-hidden="false"
                aria-label={i18n("navbar.main.navigation")}
              >
                {conversationWorflow && (
                  <NavItem>
                    <a href="/conversation/conversation" className="nav-link">
                      <OneMessaging className="icon notification" />
                      {hasMessages && <Badge>{messages}</Badge>}
                      <VisuallyHidden>{i18n("navbar.messages")}</VisuallyHidden>
                    </a>
                  </NavItem>
                )}
                <NavItem>
                  <NavLink
                    link="/userbook/mon-compte"
                    className="dropdown-item"
                    translate={i18n("navbar.myaccount")}
                  >
                    <OneProfile className="icon user" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <button
                    className="nav-link"
                    onClick={() => {
                      setIsHelpOpen(true);
                    }}
                  >
                    <Assistance className="icon help" />
                    <VisuallyHidden>{i18n("navbar.help")}</VisuallyHidden>
                  </button>

                  <Help
                    isHelpOpen={isHelpOpen}
                    setIsHelpOpen={setIsHelpOpen}
                    parsedContent={parsedContent}
                    parsedHeadline={parsedHeadline}
                    error={error}
                  />
                </NavItem>
                <NavItem>
                  <button className="nav-link" onClick={handleLogout}>
                    <Disconnect className="icon logout" />
                    <VisuallyHidden>{i18n("navbar.disconnect")}</VisuallyHidden>
                  </button>
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
                    <a href="/timeline/timeline" className="button">
                      <NewRelease color="#fff" className="d-md-none" />
                      <span className="d-inline-block">
                        {i18n("portal.header.navigation.whatsnew")}
                      </span>
                    </a>
                  </NavItem>
                  <NavItem>
                    <a href="/userbook/annuaire" className="button">
                      <Userbook color="#fff" className="d-md-none" />
                      <span className="d-inline-block">
                        {i18n("portal.header.navigation.classMembers")}
                      </span>
                    </a>
                  </NavItem>
                  <NavItem>
                    <a href="/welcome" className="button">
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
            <NavLink
              link="/timeline/timeline"
              className="navbar-title d-md-none"
            >
              {title}
            </NavLink>
            <ul className="navbar-nav">
              <NavItem>
                <NavLink
                  link="/timeline/timeline"
                  translate={i18n("navbar.home")}
                >
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
                <Popover
                  className="top-100"
                  id={popoverAppsId}
                  isVisible={isAppsHovered}
                >
                  <PopoverBody>
                    <WidgetAppsBody bookmarkedApps={bookmarkedApps} />
                  </PopoverBody>
                  <PopoverFooter className="widget-footer border-top border-ghost">
                    <WidgetAppsFooter />
                  </PopoverFooter>
                </Popover>
              </NavItem>
              {conversationWorflow && (
                <NavItem>
                  <NavLink
                    className="position-relative"
                    link="/conversation/conversation"
                    translate={i18n("conversation")}
                  >
                    <NeoMessaging color="#fff" />
                    {hasMessages && <Badge>{messages}</Badge>}
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
                    {hasMessages && <Badge>{messages}</Badge>}
                  </NavLink>
                </NavItem>
              )}
              <NavItem>
                <button
                  className="nav-link btn btn-naked"
                  onClick={() => {
                    setIsHelpOpen(true);
                  }}
                >
                  <NeoAssistance color="#fff" />
                  <VisuallyHidden>{i18n("support")}</VisuallyHidden>
                </button>

                <Help
                  isHelpOpen={isHelpOpen}
                  setIsHelpOpen={setIsHelpOpen}
                  parsedContent={parsedContent}
                  parsedHeadline={parsedHeadline}
                  error={error}
                />
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
                        <a
                          href="/searchengine"
                          className="nav-link dropdown-item"
                        >
                          <Search className="icon search" />
                          <span className="nav-text">
                            {i18n("navbar.search")}
                          </span>
                        </a>
                        <Popover
                          id={popoverSearchId}
                          isVisible={isSearchHovered}
                        >
                          <NavSearch ref={inputRef}>
                            <SearchButton
                              type="submit"
                              size="sm"
                              onClick={redirectToSearch}
                              aria-label={i18n("explorer.label.search")}
                            />
                          </NavSearch>
                        </Popover>
                      </NavItem>
                    )}
                    <NavItem>
                      <a
                        href="/userbook/mon-compte"
                        className="nav-link dropdown-item"
                      >
                        <Avatar
                          alt={userName}
                          size="sm"
                          src={userAvatar}
                          variant="circle"
                          className="bg-white"
                          width="32"
                          height="32"
                        />
                        <span className="nav-text">
                          {i18n("navbar.myaccount")}
                        </span>
                      </a>
                    </NavItem>
                    <NavItem>
                      <hr className="dropdown-divider" />
                    </NavItem>
                    <NavItem>
                      <button
                        className="nav-link btn logout"
                        onClick={handleLogout}
                      >
                        <Disconnect className="icon logout" />
                      </button>
                      <span className="nav-text">
                        {i18n("navbar.disconnect")}
                      </span>
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
