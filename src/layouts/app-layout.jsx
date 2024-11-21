import { Outlet } from "react-router-dom";
import LeftPanel from "../components/leftPanel/LeftPanel";
import Navbar from "../components/navbar/Navbar";
import RightPanel from "../components/rightPanel/RightPanel";
import { Container, MainContainer } from "./layourStyled";
import { useRef, useState, useEffect } from "react";

const AppLayout = () => {
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
    <Container>
      <LeftPanel
        leftPanelView={leftPanelView}
        ref={sidebarRef}
        isDarkMode={isDarkMode}
      />
      <MainContainer>
        <Navbar
          leftPanelView={leftPanelView}
          setLeftPanelView={setLeftPanelView}
          rightPanelView={rightPanelView}
          setRightPanelView={setRightPanelView}
          isMobile={isMobile}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          isOrderList={isOrderList}
          setIsOrderList={setIsOrderList}
        />
        <Outlet
          context={{
            isDarkMode,
            setIsDarkMode,
          }}
        />
      </MainContainer>
      <RightPanel
        rightPanelView={rightPanelView}
        ref={rightSidebarRef}
        isDarkMode={isDarkMode}
      />
    </Container>
  );
};

export default AppLayout;
