import styled from "styled-components";

const NavbarWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid
    ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF1A" : "#1C1C1C1A")};
  padding: 18px 25px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#1C1C1C" : "white")};
  transition: background-color 0.3s ease, border-color 0.3s ease;

  @media (max-width: 429px) {
    ${"" /* flex-direction: column; */}
    align-items: flex-start;
    gap: 15px;
    padding: 18px 16px;
  }
`;

const NavbarLeftWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  transition: gap 0.3s ease;

  @media (max-width: 429px) {
    gap: 6px;
  }
`;

const NavbarRightWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  transition: gap 0.3s ease;

  @media (max-width: 429px) {
    gap: 20px;
  }
`;

const NavbarCrumbs = styled.div`
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF66" : "black")};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFFCC" : "#1470ec")};
    text-decoration: underline;
  }
`;

const NavbarIcons = styled.img`
  width: 17px;
  height: 17px;
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.3s ease;

  &:hover {
    transform: scale(1.1);
    filter: ${({ isDarkMode }) =>
      isDarkMode ? "brightness(1.3)" : "brightness(0.7)"};
  }
`;

const SearchBar = styled.input`
  padding: 8px 30px;
  border: none;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease, background-color 0.3s ease;
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? "#FFFFFF1A" : "#1C1C1C0D"};
  &::placeholder {
    color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF33" : "#1C1C1C33")};
    opacity: 1;
    transition: color 0.3s ease;
  }

  &:focus {
    border: 1px solid
      ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF66" : "#1470ec")};
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? "#FFFFFF33" : "#e0f0ff"};
  }
`;

const SearchIcon = styled.img`
  width: 17px;
  height: 17px;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const SearchBarWrap = styled.div`
  position: relative;
  &:hover ${SearchBar} {
    border-color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF66" : "#1470ec")};
  }
  @media (max-width: 425px) {
    display: none; /* Hide on small screens */
  }
`;

const ShortcutDisplay = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF33" : "#1C1C1C33")};
`;

const NavbarStyles = {
  NavbarWrap,
  NavbarLeftWrap,
  NavbarRightWrap,
  NavbarCrumbs,
  NavbarIcons,
  SearchBar,
  SearchIcon,
  SearchBarWrap,
  ShortcutDisplay,
};

export default NavbarStyles;
