import React, { createContext, useState, useRef, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [leftPanelView, setLeftPanelView] = useState(window.innerWidth > 1024);
  const [rightPanelView, setRightPanelView] = useState(
    window.innerWidth > 1024
  );
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOrderList, setIsOrderList] = useState(false);
  const sidebarRef = useRef(null);
  const rightSidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        leftPanelView &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setLeftPanelView(false);
      }
      if (
        rightPanelView &&
        rightSidebarRef.current &&
        !rightSidebarRef.current.contains(event.target)
      ) {
        setRightPanelView(false);
      }
    };

    const handleResize = () => {
      const mobileView = window.innerWidth <= 1024;
      setIsMobile(mobileView);
      if (!mobileView) {
        setLeftPanelView(true);
        setRightPanelView(true);
      } else {
        setLeftPanelView(false);
        setRightPanelView(false);
      }
    };

    if (isMobile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [leftPanelView, rightPanelView, isMobile]);

  return (
    <AppContext.Provider
      value={{
        isMobile,
        leftPanelView,
        setLeftPanelView,
        rightPanelView,
        setRightPanelView,
        isDarkMode,
        setIsDarkMode,
        isOrderList,
        setIsOrderList,
        sidebarRef,
        rightSidebarRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
