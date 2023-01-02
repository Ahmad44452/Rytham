import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  padding: 1rem 3rem;
`;

export const MainHeading = styled.h1`
  font-size: 5rem;
  text-transform: uppercase;
`;

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  
  flex-wrap: wrap;
  column-gap: 80px;
  row-gap: 30px;
`;

export const Item = styled(Link)`
  padding: 1.5rem 1.7rem;
  background-color: #181818;
  border-radius: 5px;
  margin-top: 2rem;
  max-width: 234px;

  &:link,&:visited{
    text-decoration: none;
    color: ${({ theme: { colors } }) => colors.themeWhite};
  }

  /* &:not(:last-child){
    margin-right: 3rem;
  } */


  h2{
    font-size: 2rem;
    margin: 1rem 0;
  }

  h3{
    font-size: 1.5rem;
    font-weight: 300;
  }

  &:hover{
    background-color: #1e1e1e;
  }

  &:hover h2{
    text-decoration: underline;
  }
`;

export const ItemImageWrapper = styled.div`
  width: 20rem;
  height: 20rem;
  position: relative;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 1;

    &:first-child{
      position: absolute;
      filter: blur(20px);
      z-index: 0 !important;
    }
  }

  
`;