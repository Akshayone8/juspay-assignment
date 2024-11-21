import styled from "styled-components";

export const DataContainer = styled.main`
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: scroll !important ;
  max-height: 90vh;

  background-color: ${({ isDarkMode }) => (isDarkMode ? "#1C1C1C" : "white")};

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  scrollbar-width: thin;
  scrollbar-color: gray #f0f0f0;
`;

export const DataTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#FFFFFF" : "black")};
`;

export const SectionOneWrap = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  @media (max-width: 429px) {
    flex-direction: column;
  }
`;

export const ProjectionCard = styled.div`
  border-radius: 16px;
  color: #1c1c1c;
  font-weight: 400;
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? "#FFFFFF0D" : "#F7F9FB"};
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  transition: transform 0.4s ease, box-shadow 0.4s ease,
    background-color 0.4s ease;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: translateY(-8px) scale(1.05) rotate(1deg);
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
    background: linear-gradient(
      135deg,
      ${({ isDarkMode }) => (isDarkMode ? "#444444" : "#E5ECF6")},
      ${({ isDarkMode }) => (isDarkMode ? "#333333" : "#F0F4FA")}
    );
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.2),
      transparent 70%
    );
    transition: transform 0.5s ease;
    transform: scale(1);
  }

  &:hover:before {
    transform: scale(1.2);
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transition: opacity 0.5s ease;
    opacity: 0;
  }

  &:hover:after {
    opacity: 0.8;
  }
`;

export const RevenueGraphCard = styled.div`
  position: relative;
  padding: 24px;
  border-radius: 16px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#1A1A1A" : "#F7F9FB")};
  width: 100%;
  overflow: hidden;
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#2E2E2E" : "#FFFFFF")};

  &:hover {
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? "#2E2E2E" : "#FFFFFF"};
    box-shadow: ${({ isDarkMode }) =>
      isDarkMode
        ? "0 8px 30px rgba(255, 255, 255, 0.2)"
        : "0 8px 30px rgba(0, 0, 0, 0.15)"};
  }

  &:hover:before {
    opacity: 0.4;
    transform: scale(1.2);
  }

  &:before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.2),
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.4s ease, transform 0.5s ease;
    pointer-events: none;
  }

  @media (max-width: 429px) {
    width: 87%;
  }
`;
