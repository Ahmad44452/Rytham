import styled from "styled-components";

export const StyledOverlayContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,.3);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledOverlayContainerSub = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 7px;
  padding: 2rem;
`;

export const StyledOverlayCloseBtn = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;

  svg{
    width: 2rem;
    height: 2rem;
  }

  &:hover svg path{
    stroke: #E50914;
  }
`