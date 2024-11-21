import styled from "styled-components";

export const Aside = styled.aside`
  max-width: 280px;
  background-color: ${(props) => (props.isDarkMode ? "#1C1C1C" : "white")};
  padding: 20px;
  border-left: 1px solid
    ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF1A" : "#1C1C1C1A")};
  width: 100%;
  height: 100vh;
  display: ${(props) => (props.rightPanelView ? "" : "none")};
  @media (max-width: 1024px) {
    position: absolute;
    z-index: 999999;
    right: 0;
  }
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h2`
  font-weight: bold;
  color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF" : "#1C1C1C66")};
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;

export const Notification = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;

export const IconPlaceholder = styled.div`
  width: 20px;
  height: 20px;
  background-color: #e3f5ff;
  border-radius: 8px;
  padding: 4px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icons = styled.img`
  width: 17px;
  height: 17px;
`;

export const NotificationText = styled.div`
  font-size: 14px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF" : "black")};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Timestamp = styled.div`
  font-size: 11px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF66" : "#6b7280")};
  margin-top: 2px;
`;

export const Activity = styled(Notification)`
  align-items: flex-start;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 10px;
`;

export const AvatarPlaceholder = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Line = styled.div`
  width: 1px;
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? "#FFFFFF1A " : "#1C1C1C1A"};
  flex-grow: 1;
  position: absolute;
  top: 27px;
  bottom: -20px;
  left: 9px;
`;

export const ActivityText = styled(NotificationText)`
  margin-top: 0;
`;

export const Contact = styled(Notification)`
  margin-bottom: 13px;
`;

export const ContactName = styled.div`
  font-size: 14px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF" : "black")};
`;
