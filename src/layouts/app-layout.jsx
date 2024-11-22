import { Outlet } from "react-router-dom";
import LeftPanel from "../components/leftPanel/LeftPanel";
import Navbar from "../components/navbar/Navbar";
import RightPanel from "../components/rightPanel/RightPanel";
import { Container, MainContainer } from "./layourStyled";

import { AppProvider } from "../context/AppContext";

const AppLayout = () => {
  return (
    <AppProvider>
      <Container>
        <LeftPanel />
        <MainContainer>
          <Navbar />
          <Outlet />
        </MainContainer>
        <RightPanel />
      </Container>
    </AppProvider>
  );
};

export default AppLayout;
