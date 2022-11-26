import styled from "styled-components";

export const AdminNavbarStyled = styled.nav`
  /* background-color: ${({ theme: { colors } }) => colors.logoRed}; */
  display: flex;
  justify-content: center;
  overflow: hidden;
  background-color: #fff;
  
`;

export const AdminNavbarContainerStyled = styled.div`
  display: flex;
  padding: 2rem 1rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 280%;
    border-radius: 50%;
    background-color: ${({ theme: { colors } }) => colors.main};
    z-index: 5;
  }

  a {
    &:link,
    &:visited {
      text-decoration: none;
    }
    font-size: 2rem;
    z-index: 10;
    text-align: center;
    margin: 0 2.5rem;
    cursor: pointer;
    color: #fff;
  }

  a.navlink-active {
    color: ${({ theme: { colors } }) => colors.logoRed};

    svg {
      color: ${({ theme: { colors } }) => colors.logoRed};
    }
  }
`;

export const AdminNavbarItemIconStyled = styled.div`
  svg {
    width: 4rem;
    height: 4rem;
    color: #fff;
    /* fill: ${({ theme: { colors } }) => colors.logoRed}; */
  }
`;

export const AdminNavbarItemTextStyled = styled.div`
  text-transform: uppercase;
  /* color: #fff; */
  font-size: 1rem;
  /* color: ${({ theme: { colors } }) => colors.logoRed}; */
`;
