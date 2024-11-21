import styled from "styled-components";

export const DataTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF" : "black")};
`;

export const CardsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;

  @media (max-width: 320px) {
    grid-template-columns: 1fr; /* Single column layout for smaller screens */
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 24px;
  border-radius: 16px;
  color: #1c1c1c;
  font-weight: 400;
  background-color: ${({ type, isDarkMode }) => {
    if (isDarkMode && (type === "orders" || type === "revenue")) {
      return "#FFFFFF0D";
    }
    switch (type) {
      case "customer":
        return "#E3F5FF";
      case "orders":
        return "#F7F9FB";
      case "revenue":
        return "#F7F9FB";
      case "growth":
        return "#E5ECF6";
      default:
        return "#E3F5FF";
    }
  }};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
    background-color: ${({ type, isDarkMode }) => {
      if (isDarkMode && (type === "orders" || type === "revenue")) {
        return "#FFFFFF1A";
      }
      switch (type) {
        case "customer":
          return "#D1EFFF";
        case "orders":
          return "#EFF3F7";
        case "revenue":
          return "#EFF3F7";
        case "growth":
          return "#D4E2F2";
        default:
          return "#D1EFFF";
      }
    }};
  }
  @media (max-width: 429px) {
    padding: 12px;
  }
`;

export const CountWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardCount = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF" : "#000000")};
`;

export const CardSubCount = styled.div`
  font-size: 12px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF" : "#000000")};
`;

export const ProgressIcon = styled.img`
  width: 16px;
  height: 16px;
`;
