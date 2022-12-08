import styled from "styled-components";

export const StyledHome = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${({ theme: { colors } }) => colors.main};
  color: ${({ theme: { colors } }) => colors.secondary};
`;

export const StyledHomeTop = styled.div`
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

export const StyledHomeBottom = styled.div`

`;