import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarCrumbsLink = styled(Link)`
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

const NavbarCrumbs = styled.div`
  font-size: 14px;
  font-weight: 400;

  color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF66" : "black")};
  transition: color 0.3s ease;

  ${
    "" /* &:hover {
    color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFFCC" : "#1470ec")};
    text-decoration: underline;
  } */
  }
`;

const BreadCrumbsStyled = {
  NavbarCrumbs,
  NavbarCrumbsLink,
};

export default BreadCrumbsStyled;
