import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHomeNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3rem;
  border-bottom: 1px solid #5e5e5e;
`

export const StyledHomeNavbarLink = styled(Link)`
  display: flex;
  align-items: center;

  img{
    width: 5rem;
  }

`

export const StyledHomeNavbarSearch = styled.div`
  position: relative;

  svg{
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    width: 2rem;
    height: 2rem;
    fill: #fff;
  }
`