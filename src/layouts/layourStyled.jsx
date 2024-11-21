import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 1024px) {
    position: absolute;
    z-index: ${(props) =>
      props.leftPanelView || props.rightPanelView ? "-1" : ""};
  }
`;
