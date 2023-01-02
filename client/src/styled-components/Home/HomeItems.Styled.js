import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledItems = styled.div`
padding: 1rem 2rem;
margin-bottom: 2rem;
`;

export const StyledItemsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 2rem;
  /* border-bottom: 1px solid #5e5e5e; */
`

export const StyledItemsHeading = styled.h1`
  font-size: 5rem;
  text-transform: uppercase;
  /* font-weight: 300; */
  line-height: 1;

`;

export const StyledItemsBrowseAll = styled(Link)`
  &:link,&:visited{
    text-decoration: none;
    color: ${({ theme: { colors } }) => colors.secondary};
  }
  font-size: 2rem;
  display: flex;
  align-items: center;
  line-height: 1;
  &:hover{
    text-decoration: underline;
  }

  &:hover svg{
    transform: translate3d(5px,0,0);
  }

  svg{
    width: 1.5rem;
    height: 1.5rem;
    margin-left: .3rem;
    transition: all .2s;  
    color: ${({ theme: { colors } }) => colors.secondary};
  }
`;

export const StyledItemsContainer = styled.div`
  display: flex;
  padding: 2rem 0;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 2px;
    width: 5px;
    display: block;
  }
  
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

export const StyledItemsItem = styled(Link)`
  padding: 1.5rem 1.7rem;
  background-color: #181818;
  border-radius: 5px;
  max-width: 234px;
  
  &:link,&:visited{
    text-decoration: none;
    color: ${({ theme: { colors } }) => colors.themeWhite};
  }

  &:not(:first-child){
    margin-left: 3rem;
  }


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
`

export const StyledItemsImageWrapper = styled.div`
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