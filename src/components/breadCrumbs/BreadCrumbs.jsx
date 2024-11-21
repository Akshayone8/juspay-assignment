import { useLocation } from "react-router-dom";
import BreadCrumbsStyled from "./BreadCrumbsStyled";

const BreadCrumbs = ({ isDarkMode, separator = "/" }) => {
  const location = useLocation();
  const pathName = location.pathname.split("/").filter((x) => x);

  return (
    <>
      <BreadCrumbsStyled.NavbarCrumbsLink
        isDarkMode={isDarkMode}
        style={{ opacity: "0.8" }}
        to="/"
      >
        Dashboards
      </BreadCrumbsStyled.NavbarCrumbsLink>
      {pathName.length > 0 && (
        <BreadCrumbsStyled.NavbarCrumbs
          isDarkMode={isDarkMode}
          style={{ opacity: "0.8" }}
        >
          {separator}
        </BreadCrumbsStyled.NavbarCrumbs>
      )}
      {pathName.map((name, index) => {
        const routeTo = `/${pathName.slice(0, index + 1).join("/")}`;
        const isLast = index === pathName.length - 1;

        const capitalizeFirstLetter = (word) =>
          word.charAt(0).toUpperCase() + word.slice(1);

        return !isLast ? (
          <BreadCrumbsStyled.NavbarCrumbsLink
            key={routeTo}
            isDarkMode={isDarkMode}
            style={{ color: isDarkMode ? "#FFFFFF" : "" }}
            to={routeTo}
          >
            {capitalizeFirstLetter(name)}
          </BreadCrumbsStyled.NavbarCrumbsLink>
        ) : (
          <BreadCrumbsStyled.NavbarCrumbs
            key={routeTo}
            isDarkMode={isDarkMode}
            style={{ color: isDarkMode ? "#FFFFFF" : "" }}
          >
            {capitalizeFirstLetter(name)}
          </BreadCrumbsStyled.NavbarCrumbs>
        );
      })}
    </>
  );
};

export default BreadCrumbs;
