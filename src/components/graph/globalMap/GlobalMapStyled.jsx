import styled from "styled-components";

export const DataTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF" : "black")};
`;

export const RevenueLocationCard = styled.div`
  padding: 24px;
  border-radius: 16px;
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? "#FFFFFF0D" : "#F7F9FB"};
  transition: transform 0.2s ease, background-color 0.2s ease;
  &:hover {
    transform: translateY(-4px); /* Slightly lifts the card on hover */
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? "#FFFFFF1A" : "#F0F3F5"}; /* Lightens the background */
    box-shadow: ${({ isDarkMode }) =>
      isDarkMode
        ? "0 4px 20px rgba(255, 255, 255, 0.2)"
        : "0 4px 20px rgba(0, 0, 0, 0.15)"};
  }

  @media (max-width: 429px) {
    width: 87%;
  }
`;

export const WorldMap = styled.img`
  margin: 10px;
`;
export const WorldIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CountryPercentage = styled.div`
  display: flex;
  margin: 7px 0;
  flex-direction: column;
  gap: 8px;
`;
export const LabelWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const PercentageLabel = styled.span`
  font-size: 12px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF" : "")};
`;

export const ValueLabel = styled.span`
  font-size: 12px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF" : "#333")};
`;

export const PercentageBar = styled.div`
  height: 3px;
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? "#1C1C1C66" : "#e0e0e0"};
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
`;

export const Fill = styled.div`
  height: 100%;
  background-color: #a8c5da;
  width: ${(props) => props.percentage}%;
`;
