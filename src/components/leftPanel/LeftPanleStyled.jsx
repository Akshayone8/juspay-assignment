import { Link } from "react-router-dom";
import styled from "styled-components";

const Aside = styled.aside`
  max-width: 212px;
  width: 100%;
  height: 100vh;
  padding: 20px;
  border-right: 1px solid
    ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF1A" : "#1C1C1C1A")};
  display: ${(props) => (props.leftPanelView ? "flex" : "none")};
  flex-direction: column;
  background-color: ${(props) => (props.isDarkMode ? "#1C1C1C" : "white")};
  @media (max-width: 1024px) {
    position: relative;
    z-index: 999999;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const ProfileImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
`;

const ProfileText = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "#FFFFFF" : "#1f2937")};
`;

const NavSection = styled.nav`
  flex: 1;
`;

const SectionTitle = styled.div`
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "#FFFFFF" : "#1C1C1C66")};
  margin-top: 15px;
  margin-bottom: 12px;
  font-size: 14px;
  opacity: ${(props) => (props.isDarkMode ? "0.5" : "1")};
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 12px 7px 0px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF" : "black")};
  background-color: ${({ selected, isDarkMode }) =>
    selected ? (isDarkMode ? "#FFFFFF1A" : "#1C1C1C0D") : "transparent"};
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  transition: background-color 0.2s;
  margin-bottom: 2px;
  text-decoration: none; /* Removes underline */

  &:hover {
    background-color: #1c1c1c0d;
  }

  span {
    flex: 1;
  }
`;

const NavSubItem = styled(NavItem)`
  padding-left: 55px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF" : "black")};
  font-size: 14px;

  &:hover {
    background-color: #1c1c1c0d;
  }
`;

const CircleDot = styled.div`
  width: 6px;
  height: 6px;
  background-color: #94a3b8;
  border-radius: 50%;
`;

const Icon = styled.img`
  width: 17px;
  height: 17px;
`;

const ArrowIcon = styled.span`
  font-size: 10px;
  color: #94a3b8;
  margin-left: ${({ isDefault }) => (isDefault ? "0px" : "auto")};
  margin-right: ${({ isDefault }) => (isDefault ? "13px" : "auto")};
  max-width: fit-content;
  border-radius: ${({ isDefault }) => (isDefault ? "20px" : "")};
  height: ${({ isDefault }) => (isDefault ? "16px" : "")};
  border-left: ${({ isDefault, isDarkMode, selected }) =>
    isDefault && selected
      ? `4px solid ${isDarkMode ? "#C6C7F8" : "black"}`
      : "none"};
`;

const HeadingWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const LeftPanelStyles = {
  Aside,
  LogoSection,
  Logo,
  Profile,
  ProfileImage,
  ProfileText,
  NavSection,
  SectionTitle,
  NavItem,
  NavSubItem,
  CircleDot,
  Icon,
  ArrowIcon,
  HeadingWrap,
};

export default LeftPanelStyles;
