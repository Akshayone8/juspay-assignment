import React, { useEffect, useRef, useState } from "react";
import NavbarStyles from "./NavbarStyled";
import { Tooltip } from "react-tooltip"; // Import Tooltip instead of ReactTooltip
import FavIcon from "./Images/fav.svg";
import LeftPanelView from "./Images/Sidebar.svg";
import ThemeIcon from "./Images/theme.svg";
import RecentIcon from "./Images/recent.svg";
import NotificationIcon from "./Images/notification.svg";
import SearchIconImg from "./Images/search.svg";
import FavIconDark from "./Images/fav-dark.svg";
import LeftPanelViewDark from "./Images/left-panel-dark.svg";
import ThemeIconDark from "./Images/theme-dark.svg";
import RecentIconDark from "./Images/activity-dark.svg";
import NotificationIconDark from "./Images/notification-dark.svg";
import SearchIconImgDark from "./Images/search-dark.svg";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";

function Navbar({
  leftPanelView,
  setLeftPanelView,
  rightPanelView,
  setRightPanelView,
  isMobile,
  isDarkMode,
  setIsDarkMode,
  isOrderList,
  setIsOrderList,
}) {
  const searchRef = useRef(null);

  const handleLeftPanelToggle = () => {
    if (isMobile) {
      setLeftPanelView(!leftPanelView);
      if (!leftPanelView) {
        setRightPanelView(false);
      }
    } else {
      setLeftPanelView(!leftPanelView);
    }
  };

  const handleRightPanelToggle = () => {
    if (isMobile) {
      setRightPanelView(!rightPanelView);
      if (!rightPanelView) {
        setLeftPanelView(false);
      }
    } else {
      setRightPanelView(!rightPanelView);
    }
  };

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <NavbarStyles.NavbarWrap isDarkMode={isDarkMode}>
        <NavbarStyles.NavbarLeftWrap>
          <NavbarStyles.NavbarIcons
            data-tooltip-id="leftPanelTooltip"
            data-tooltip-content="Toggle Left Panel"
            onClick={handleLeftPanelToggle}
            src={isDarkMode ? LeftPanelViewDark : LeftPanelView}
            alt="left-view"
            className="navbar-left-toggle"
          />
          <NavbarStyles.NavbarIcons
            data-tooltip-id="favTooltip"
            data-tooltip-content="Favorites"
            src={isDarkMode ? FavIconDark : FavIcon}
            alt="fav"
            className="navbar-fav"
          />

          <BreadCrumbs isDarkMode={isDarkMode} />
        </NavbarStyles.NavbarLeftWrap>
        <NavbarStyles.NavbarRightWrap>
          <NavbarStyles.SearchBarWrap className="navbar-search-bar">
            <NavbarStyles.SearchIcon
              src={isDarkMode ? SearchIconImgDark : SearchIconImg}
              alt="search"
            />
            <NavbarStyles.SearchBar
              isDarkMode={isDarkMode}
              ref={searchRef}
              type="text"
              placeholder="Search"
            />
            <NavbarStyles.ShortcutDisplay isDarkMode={isDarkMode}>
              ⌘ /
            </NavbarStyles.ShortcutDisplay>
          </NavbarStyles.SearchBarWrap>
          <NavbarStyles.NavbarIcons
            data-tooltip-id="themeTooltip"
            data-tooltip-content="Switch Theme"
            onClick={handleDarkMode}
            src={isDarkMode ? ThemeIconDark : ThemeIcon}
            alt="theme"
            className="navbar-dark-mode"
          />
          <NavbarStyles.NavbarIcons
            data-tooltip-id="recentTooltip"
            data-tooltip-content="Recent Activities"
            src={isDarkMode ? RecentIconDark : RecentIcon}
            alt="recent"
            className="navbar-notification"
          />
          <NavbarStyles.NavbarIcons
            data-tooltip-id="notificationTooltip"
            data-tooltip-content="Notifications"
            src={isDarkMode ? NotificationIconDark : NotificationIcon}
            alt="notification"
            onClick={handleRightPanelToggle}
          />
        </NavbarStyles.NavbarRightWrap>
      </NavbarStyles.NavbarWrap>

      <Tooltip id="leftPanelTooltip" />
      <Tooltip id="favTooltip" />
      <Tooltip id="themeTooltip" />
      <Tooltip id="recentTooltip" />
      <Tooltip id="notificationTooltip" />
    </>
  );
}

export default Navbar;
