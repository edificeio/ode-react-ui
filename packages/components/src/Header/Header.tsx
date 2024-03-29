import {
  VisuallyHidden,
  Logo,
  SearchButton,
  Popover,
  PopoverBody,
  PopoverFooter,
  Avatar,
} from "@ode-react-ui/components";
import { useUser, useHeader } from "@ode-react-ui/core";
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
import { useTranslation } from "react-i18next";

import { Badge } from "./Badge";
import { Navbar } from "./Navbar";
import { NavBarNav } from "./NavbarNav";
import { NavItem } from "./NavItem";
import { NavLink } from "./NavLink";
import { NavSearch } from "./NavSearch";
import { WidgetAppsBody, WidgetAppsFooter } from "./WidgetApps";
import { Help } from "../Help";
import { useHelp } from "../Help/hooks/useHelp";

export interface HeaderProps {
  is1d?: boolean;
  src: string | undefined;
}

export default function Header({
  is1d = false,
  src = "",
}: HeaderProps): JSX.Element {
  const { user, avatar } = useUser();
  const { t } = useTranslation();
  const {
    inputRef,
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
  } = useHeader({ user, avatar });

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
                aria-label={t("navbar.main.navigation")}
              >
                {conversationWorflow && (
                  <NavItem>
                    <a href="/conversation/conversation" className="nav-link">
                      <OneMessaging className="icon notification" />
                      {hasMessages && <Badge>{messages}</Badge>}
                      <VisuallyHidden>{t("navbar.messages")}</VisuallyHidden>
                    </a>
                  </NavItem>
                )}
                <NavItem>
                  <NavLink
                    link="/userbook/mon-compte"
                    className="dropdown-item"
                    translate={t("navbar.myaccount")}
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
                    <VisuallyHidden>{t("navbar.help")}</VisuallyHidden>
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
                    <VisuallyHidden>{t("navbar.disconnect")}</VisuallyHidden>
                  </button>
                </NavItem>
                <NavItem className="d-md-none">
                  <button
                    className="nav-link btn btn-naked"
                    type="button"
                    aria-controls="navbarCollapsed"
                    aria-expanded={!isCollapsed}
                    aria-label={t("navbar.secondary.navigation")}
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
            aria-label={t("navbar.secondary.navigation")}
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
                  translate={t("navbar.home")}
                />

                <NavBarNav className="gap-8">
                  <NavItem>
                    <a href="/timeline/timeline" className="button">
                      <NewRelease color="#fff" className="d-md-none" />
                      <span className="d-inline-block">
                        {t("portal.header.navigation.whatsnew")}
                      </span>
                    </a>
                  </NavItem>
                  <NavItem>
                    <a href="/userbook/annuaire" className="button">
                      <Userbook color="#fff" className="d-md-none" />
                      <span className="d-inline-block">
                        {t("portal.header.navigation.classMembers")}
                      </span>
                    </a>
                  </NavItem>
                  <NavItem>
                    <a href="/welcome" className="button">
                      <MyApps color="#fff" className="d-md-none" />
                      <span className="d-inline-block">
                        {t("portal.header.navigation.myapps")}
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
            <a
              href="/timeline/timeline"
              className="navbar-title text-truncate d-md-none"
            >
              {title}
            </a>
            <ul className="navbar-nav">
              <NavItem>
                <NavLink link="/timeline/timeline" translate={t("navbar.home")}>
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
                <NavLink link="/welcome" translate={t("navbar.applications")}>
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
                    translate={t("conversation")}
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
                    translate={t("conversation")}
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
                  <VisuallyHidden>{t("support")}</VisuallyHidden>
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
                    className="nav-link btn btn-naked d-md-none"
                    type="button"
                    aria-controls="dropdown-navbar"
                    aria-expanded={!isCollapsed}
                    // TODO: add t key
                    aria-label={t("navbar.open.menu")}
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
                        <a href="/community" className="nav-link dropdown-item">
                          <Community className="icon community" />
                          <span className="nav-text">
                            {t("navbar.community")}
                          </span>
                        </a>
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
                          <span className="nav-text">{t("navbar.search")}</span>
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
                              aria-label={t("navbar.search")}
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
                          {t("navbar.myaccount")}
                        </span>
                      </a>
                    </NavItem>
                    <NavItem>
                      <hr className="dropdown-divider" />
                    </NavItem>
                    <NavItem>
                      <button
                        className="nav-link btn logout"
                        aria-labelledby="logout-label"
                        onClick={handleLogout}
                      >
                        <Disconnect className="icon logout" />
                      </button>
                      <span id="logout-label" className="nav-text">
                        {t("navbar.disconnect")}
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
