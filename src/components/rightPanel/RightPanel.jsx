import {
  Aside,
  Section,
  SectionTitle,
  Notification,
  IconPlaceholder,
  NotificationText,
  Timestamp,
  Activity,
  AvatarWrapper,
  AvatarPlaceholder,
  Line,
  ActivityText,
  Contact,
  ContactName,
  Icons,
} from "./RightPanelStyled";
import { useContext } from "react";
import BugIcon from "./Images/bug.svg";
import UserIcon from "./Images/User.svg";
import Broadcast from "./Images/Broadcast.svg";
import Person1 from "./Images/person1.svg";
import Person2 from "./Images/person2.svg";
import Person3 from "./Images/person3.svg";
import Person4 from "./Images/person4.svg";
import { AppContext } from "../../context/AppContext";

const RightPanel = () => {
  const { rightPanelView, isDarkMode, rightSidebarRef } =
    useContext(AppContext);
  return (
    <Aside
      rightPanelView={rightPanelView}
      ref={rightSidebarRef}
      isDarkMode={isDarkMode}
    >
      <Section>
        <SectionTitle isDarkMode={isDarkMode}>Notifications</SectionTitle>
        <Notification>
          <IconPlaceholder>
            <Icons src={BugIcon} alt="icon" />
          </IconPlaceholder>
          <NotificationText isDarkMode={isDarkMode}>
            You have a bug that needs...
            <Timestamp isDarkMode={isDarkMode}>Just now</Timestamp>
          </NotificationText>
        </Notification>
        <Notification>
          <IconPlaceholder>
            <Icons src={UserIcon} alt="icon" />
          </IconPlaceholder>
          <NotificationText isDarkMode={isDarkMode}>
            New user registered
            <Timestamp isDarkMode={isDarkMode}>59 minutes ago</Timestamp>
          </NotificationText>
        </Notification>
        <Notification>
          <IconPlaceholder>
            <Icons src={BugIcon} alt="icon" />
          </IconPlaceholder>
          <NotificationText isDarkMode={isDarkMode}>
            You have a bug that needs...
            <Timestamp isDarkMode={isDarkMode}>12 hours ago</Timestamp>
          </NotificationText>
        </Notification>
        <Notification>
          <IconPlaceholder>
            <Icons src={Broadcast} alt="icon" />
          </IconPlaceholder>
          <NotificationText isDarkMode={isDarkMode}>
            Andi Lane subscribed to you
            <Timestamp isDarkMode={isDarkMode}>Today, 11:59 AM</Timestamp>
          </NotificationText>
        </Notification>
      </Section>

      {/* Activities Section */}
      <Section>
        <SectionTitle isDarkMode={isDarkMode}>Activities</SectionTitle>
        <Activity>
          <AvatarWrapper>
            <AvatarPlaceholder src={Person1} alt="person" />
            <Line isDarkMode={isDarkMode} />
          </AvatarWrapper>
          <ActivityText isDarkMode={isDarkMode}>
            You have a bug that needs...
            <Timestamp isDarkMode={isDarkMode}>Just now</Timestamp>
          </ActivityText>
        </Activity>
        <Activity>
          <AvatarWrapper>
            <AvatarPlaceholder src={Person2} alt="person" />
            <Line isDarkMode={isDarkMode} />
          </AvatarWrapper>
          <ActivityText isDarkMode={isDarkMode}>
            Released a new version
            <Timestamp isDarkMode={isDarkMode}>59 minutes ago</Timestamp>
          </ActivityText>
        </Activity>
        <Activity>
          <AvatarWrapper>
            <AvatarPlaceholder src={Person3} alt="person" />
            <Line isDarkMode={isDarkMode} />
          </AvatarWrapper>
          <ActivityText isDarkMode={isDarkMode}>
            Submitted a bug
            <Timestamp isDarkMode={isDarkMode}>12 hours ago</Timestamp>
          </ActivityText>
        </Activity>
        <Activity>
          <AvatarWrapper>
            <AvatarPlaceholder src={Person1} alt="person" />
            <Line isDarkMode={isDarkMode} />
          </AvatarWrapper>
          <ActivityText isDarkMode={isDarkMode}>
            Modified A data in Page X
            <Timestamp isDarkMode={isDarkMode}>Today, 11:59 AM</Timestamp>
          </ActivityText>
        </Activity>
        <Activity>
          <AvatarWrapper>
            <AvatarPlaceholder src={Person4} alt="person" />
          </AvatarWrapper>
          <ActivityText isDarkMode={isDarkMode}>
            Deleted a page in Project X
            <Timestamp isDarkMode={isDarkMode}>Feb 2, 2023</Timestamp>
          </ActivityText>
        </Activity>
      </Section>

      {/* Contacts Section */}
      <Section>
        <SectionTitle isDarkMode={isDarkMode}>Contacts</SectionTitle>
        <Contact>
          <AvatarPlaceholder src={Person1} alt="person" />
          <ContactName isDarkMode={isDarkMode}>Natal Craig</ContactName>
        </Contact>
        <Contact>
          <AvatarPlaceholder src={Person2} alt="person" />
          <ContactName isDarkMode={isDarkMode}>Drew Cano</ContactName>
        </Contact>
        <Contact>
          <AvatarPlaceholder src={Person3} alt="person" />
          <ContactName isDarkMode={isDarkMode}>Orlando Diggs</ContactName>
        </Contact>
        <Contact>
          <AvatarPlaceholder src={Person4} alt="person" />
          <ContactName isDarkMode={isDarkMode}>Andi Lane</ContactName>
        </Contact>
        <Contact>
          <AvatarPlaceholder src={Person2} alt="person" />
          <ContactName isDarkMode={isDarkMode}>Kate Morrison</ContactName>
        </Contact>
        <Contact>
          <AvatarPlaceholder src={Person1} alt="person" />
          <ContactName isDarkMode={isDarkMode}>Koray Okumus</ContactName>
        </Contact>
      </Section>
    </Aside>
  );
};

export default RightPanel;
