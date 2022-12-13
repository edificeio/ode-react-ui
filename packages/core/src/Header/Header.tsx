/**
 * Header / Navbar  Component
 *
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-header-one--base
 * @see Docs     https://ode-react-ui.vercel.app/?path=/docs/components-core-header-neo--base
 * @see Source   https://github.com/opendigitaleducation/ode-react-ui/blob/main/packages/core/src/Header/Header.tsx
 * @see WAI-ARIA https://www.w3.org/WAI/tutorials/menus/structure/
 */

import { useRef, useState } from "react";

import { useClickOutside, useTitle } from "@ode-react-ui/hooks";
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
  Profile,
  Userbook,
} from "@ode-react-ui/icons/nav";
import clsx from "clsx";

import { Logo } from "../Logo";
import NavLink from "../NavLink/NavLink";

interface HeaderProps {
  is1d?: boolean;
}

/**
 * Header Component
 */

const Header = ({ is1d = false }: HeaderProps): JSX.Element => {
  const welcomeUser = "Bonjour Support ONE, bienvenue !";
  const unreadNotification = 2;
  const { title } = useTitle();

  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  function toggleCollapsedNav() {
    setIsCollapsed(!isCollapsed);
  }

  const classes = clsx("header header-react", {
    "no-2d": is1d,
    "no-1d": !is1d,
  });

  const collapseRef = useRef(null);
  useClickOutside(collapseRef, () => setIsCollapsed(true));

  return (
    <header className={classes}>
      {is1d ? (
        <div className="container-fluid">
          <nav className="navbar">
            <a className="navbar-title d-md-none text-truncate" href="/">
              {title}
            </a>
            <div className="d-none d-md-inline-flex gap-12 align-items-center">
              <Profile className="icon profile" />
              <span className="navbar-text">{welcomeUser}</span>
            </div>
            <ul className="navbar-nav" aria-label="navigation principale">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <OneMessaging className="icon notification" />
                  <span className="position-absolute badge rounded-pill bg-danger">
                    {unreadNotification}
                    <span className="visually-hidden">Messages</span>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <OneProfile className="icon user" />
                  <span className="visually-hidden">Profil</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <Assistance className="icon help" />
                  <span className="visually-hidden">Assistance</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <Disconnect className="icon logout" />
                  <span className="visually-hidden">Déconnexion</span>
                </a>
              </li>
              <li className="nav-item d-md-none">
                <button
                  ref={collapseRef}
                  className="nav-link btn btn-naked"
                  type="button"
                  aria-controls="navbarCollapsed"
                  aria-expanded={!isCollapsed}
                  aria-label="Navigation secondaire"
                  onClick={toggleCollapsedNav}
                >
                  <RafterDown
                    className="icon rafter-down"
                    width="20"
                    height="20"
                  />
                </button>
              </li>
            </ul>
          </nav>
          <nav
            className="no-2d navbar navbar-secondary navbar-expand-md"
            aria-label="navigation secondaire"
          >
            <div
              className={`collapse navbar-collapse ${
                !isCollapsed ? "show" : ""
              }`}
              id="navbarCollapsed"
            >
              <Logo
                is1d
                url="/assets/logo-one.png"
                translate="Retour accueil"
              />

              <ul className="navbar-nav gap-8">
                <li className="nav-item">
                  <a href="/" className="button">
                    <NewRelease color="#fff" className="d-md-none" />
                    <span className="d-inline-block">Quoi de neuf ?</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="button">
                    <Userbook color="#fff" className="d-md-none" />
                    <span className="d-inline-block">La classe</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="button">
                    <MyApps color="#fff" className="d-md-none" />
                    <span className="d-inline-block">Mes applis</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      ) : (
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
            <Logo
              url="https://recette.opendigitaleducation.com/assets/themes/cg77/img/illustrations/logo.png"
              translate="Retour accueil"
            />
            <a href="/" className="navbar-title d-md-none">
              {title}
            </a>
            <div className="navbar-nav">
              <NavLink link="/" translate="Home">
                <Home color="#fff" />
              </NavLink>
              <NavLink link="/welcome" translate="Applications">
                <MyApps color="#fff" />
              </NavLink>
              <NavLink link="/" translate="Conversation">
                <NeoMessaging color="#fff" />
              </NavLink>
              <NavLink link="/" translate="Assistance">
                <Assistance color="#fff" />
              </NavLink>
              <div className="dropdown">
                <button
                  ref={collapseRef}
                  className="nav-link btn btn-naked d-md-none"
                  type="button"
                  aria-controls="dropdown-navbar"
                  aria-expanded={!isCollapsed}
                  aria-label="Ouvrir sous-menu"
                  onClick={toggleCollapsedNav}
                >
                  <RafterDown
                    className="icon rafter-down"
                    width="20"
                    height="20"
                    color="#fff"
                  />
                </button>
                <div
                  className={`dropdown-menu dropdown-menu-end ${
                    !isCollapsed ? "show" : ""
                  }`}
                  id="dropdown-navbar"
                >
                  <NavLink
                    link="/"
                    className="dropdown-item"
                    translate="Communautés"
                  >
                    <Community className="icon community" />
                  </NavLink>
                  <NavLink
                    link="/searchengine"
                    className="dropdown-item"
                    translate="Search"
                  >
                    <Search className="icon search" />
                  </NavLink>
                  <NavLink
                    link="/userbook/mon-compte"
                    className="dropdown-item"
                    translate="Mon compte"
                  >
                    <Profile className="icon user" />
                  </NavLink>
                  <hr className="dropdown-divider" />
                  <NavLink
                    link="/"
                    className="dropdown-item"
                    translate="Déconnexion"
                  >
                    <Disconnect className="icon logout" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
