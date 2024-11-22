import React, { useContext } from "react";
import LeftPanelStyles from "./LeftPanleStyled";
import ProfileImage from "./Images/profile-image.svg";
import DefaultIcon from "./Images/default-icon.svg";
import EcommerceIcon from "./Images/ecommerce-icon.svg";
import ProjectsIcon from "./Images/projects-icon.svg";
import OnlineCourseIcon from "./Images/online-courses-icon.svg";
import UserprofileIcon from "./Images/user-profile-icon.svg";
import AccountIcon from "./Images/account-icon.svg";
import BlogIcon from "./Images/blog-icon.svg";
import CorporateIcon from "./Images/corporate-icon.svg";
import SocialIcon from "./Images/social-icon.svg";
import DropArrow from "./Images/dropArrow.svg";
import DefaultIconDark from "./Images/default-icon-dark.svg";
import EcommerceIconDark from "./Images/ecommerce-dark.svg";
import ProjectIconDark from "./Images/projects-dark.svg";
import OnlineCourseIconDark from "./Images/online-course-dark.svg";
import UserprofileIconDark from "./Images/user-profile-dark.svg";
import AccountIconDark from "./Images/account-dark.svg";
import BlogIconDark from "./Images/blogs-dark.svg";
import CorporateIconDark from "./Images/corporate-dark.svg";
import SocialIconDark from "./Images/social-dark.svg";
import DropArrowDark from "./Images/arrow-dark.svg";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const LeftPanel = () => {
  const {
    leftPanelView,
    isDarkMode,
    sidebarRef, // Accessing the ref from AppContext
  } = useContext(AppContext);

  const location = useLocation();

  // Check if the route matches the current path
  const isActive = (path) => location.pathname === path;

  return (
    <LeftPanelStyles.Aside
      leftPanelView={leftPanelView}
      ref={sidebarRef}
      isDarkMode={isDarkMode}
    >
      {/* Logo and Profile Section */}
      <LeftPanelStyles.LogoSection>
        <LeftPanelStyles.Profile>
          <LeftPanelStyles.ProfileImage src={ProfileImage} alt="Profile" />
          <LeftPanelStyles.ProfileText isDarkMode={isDarkMode}>
            ByeWind
          </LeftPanelStyles.ProfileText>
        </LeftPanelStyles.Profile>
      </LeftPanelStyles.LogoSection>

      {/* Navigation Sections */}
      <LeftPanelStyles.NavSection>
        <LeftPanelStyles.HeadingWrap>
          <LeftPanelStyles.SectionTitle isDarkMode={isDarkMode}>
            Favorites
          </LeftPanelStyles.SectionTitle>
          <LeftPanelStyles.SectionTitle
            isDarkMode={isDarkMode}
            style={{ opacity: "0.5" }}
          >
            Recently
          </LeftPanelStyles.SectionTitle>
        </LeftPanelStyles.HeadingWrap>
        <LeftPanelStyles.NavItem>
          <LeftPanelStyles.CircleDot />{" "}
          <span style={{ color: isDarkMode ? "#FFFFFF" : "" }}>Overview</span>
        </LeftPanelStyles.NavItem>
        <LeftPanelStyles.NavItem>
          <LeftPanelStyles.CircleDot />{" "}
          <span style={{ color: isDarkMode ? "#FFFFFF" : "" }}>Projects</span>
        </LeftPanelStyles.NavItem>

        <LeftPanelStyles.SectionTitle isDarkMode={isDarkMode}>
          Dashboards
        </LeftPanelStyles.SectionTitle>
        <LeftPanelStyles.NavItem
          selected={isActive("/default")}
          isDarkMode={isDarkMode}
          to="/default"
        >
          <LeftPanelStyles.ArrowIcon
            isDefault={true}
            isDarkMode={isDarkMode}
          ></LeftPanelStyles.ArrowIcon>
          <LeftPanelStyles.Icon
            src={isDarkMode ? DefaultIconDark : DefaultIcon}
            alt="Default"
          />
          Default
        </LeftPanelStyles.NavItem>
        <LeftPanelStyles.NavItem
          selected={isActive("/orders")}
          isDarkMode={isDarkMode}
          to="/orders"
        >
          <LeftPanelStyles.ArrowIcon
            isDefault={true}
            isDarkMode={isDarkMode}
          ></LeftPanelStyles.ArrowIcon>
          <LeftPanelStyles.Icon
            src={isDarkMode ? EcommerceIconDark : EcommerceIcon}
            alt="eCommerce"
          />
          Orders
        </LeftPanelStyles.NavItem>
        <LeftPanelStyles.NavItem isDarkMode={isDarkMode}>
          <LeftPanelStyles.Icon
            src={isDarkMode ? DropArrowDark : DropArrow}
            alt="Drop Arrow"
          />
          <LeftPanelStyles.Icon
            src={isDarkMode ? ProjectIconDark : ProjectsIcon}
            alt="Projects"
          />{" "}
          <span>Projects</span>
        </LeftPanelStyles.NavItem>
        <LeftPanelStyles.NavItem isDarkMode={isDarkMode}>
          <LeftPanelStyles.Icon
            src={isDarkMode ? DropArrowDark : DropArrow}
            alt="Drop Arrow"
          />
          <LeftPanelStyles.Icon
            src={isDarkMode ? OnlineCourseIconDark : OnlineCourseIcon}
            alt="Online Courses"
          />{" "}
          <span>Online Courses</span>
        </LeftPanelStyles.NavItem>

        <LeftPanelStyles.SectionTitle isDarkMode={isDarkMode}>
          Pages
        </LeftPanelStyles.SectionTitle>
        <LeftPanelStyles.NavItem isDarkMode={isDarkMode}>
          <LeftPanelStyles.Icon
            src={isDarkMode ? DropArrowDark : DropArrow}
            alt="Drop Arrow"
          />
          <LeftPanelStyles.Icon
            src={isDarkMode ? UserprofileIconDark : UserprofileIcon}
            alt="User Profile"
          />{" "}
          <span>User Profile</span>
        </LeftPanelStyles.NavItem>
        <LeftPanelStyles.NavSubItem isDarkMode={isDarkMode}>
          Overview
        </LeftPanelStyles.NavSubItem>
        <LeftPanelStyles.NavSubItem isDarkMode={isDarkMode}>
          Projects
        </LeftPanelStyles.NavSubItem>
        <LeftPanelStyles.NavSubItem isDarkMode={isDarkMode}>
          Campaigns
        </LeftPanelStyles.NavSubItem>
        <LeftPanelStyles.NavSubItem isDarkMode={isDarkMode}>
          Documents
        </LeftPanelStyles.NavSubItem>
        <LeftPanelStyles.NavSubItem isDarkMode={isDarkMode}>
          Followers
        </LeftPanelStyles.NavSubItem>
        <LeftPanelStyles.NavItem isDarkMode={isDarkMode}>
          <LeftPanelStyles.Icon
            src={isDarkMode ? DropArrowDark : DropArrow}
            alt="Drop Arrow"
          />
          <LeftPanelStyles.Icon
            src={isDarkMode ? AccountIconDark : AccountIcon}
            alt="Account"
          />{" "}
          <span>Account</span>
        </LeftPanelStyles.NavItem>
        <LeftPanelStyles.NavItem isDarkMode={isDarkMode}>
          <LeftPanelStyles.Icon
            src={isDarkMode ? DropArrowDark : DropArrow}
            alt="Drop Arrow"
          />
          <LeftPanelStyles.Icon
            src={isDarkMode ? CorporateIconDark : CorporateIcon}
            alt="Corporate"
          />{" "}
          <span>Corporate</span>
        </LeftPanelStyles.NavItem>
        <LeftPanelStyles.NavItem isDarkMode={isDarkMode}>
          <LeftPanelStyles.Icon
            src={isDarkMode ? DropArrowDark : DropArrow}
            alt="Drop Arrow"
          />
          <LeftPanelStyles.Icon
            src={isDarkMode ? BlogIconDark : BlogIcon}
            alt="Blog"
          />{" "}
          <span>Blog</span>
        </LeftPanelStyles.NavItem>
        <LeftPanelStyles.NavItem isDarkMode={isDarkMode}>
          <LeftPanelStyles.Icon
            src={isDarkMode ? DropArrowDark : DropArrow}
            alt="Drop Arrow"
          />
          <LeftPanelStyles.Icon
            src={isDarkMode ? SocialIconDark : SocialIcon}
            alt="Social"
          />{" "}
          <span>Social</span>
        </LeftPanelStyles.NavItem>
      </LeftPanelStyles.NavSection>
    </LeftPanelStyles.Aside>
  );
};

export default LeftPanel;
