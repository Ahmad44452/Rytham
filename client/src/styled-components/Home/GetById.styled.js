import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`

`;

export const Header = styled.div`
  height: 150px;
  background-image: ${props => `url(${props.bgImg})`};
  background-size: cover;
  filter: blur(50px);
`;

export const HeaderImage = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: cover;
  transform: translate(8rem,-20%);
`;

export const HeaderHeading = styled.h2`
  font-size: 8rem;
  /* line-height: 1; */
  text-align: center;
  text-transform: uppercase;
  transform: translateY(-20%);
  font-weight: 600;
`;

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 80px;
  row-gap: 30px;
  padding: 2rem 0 4rem 0;
  position: relative;

  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 75%;
    height: 1px;
    background-color: #5e5e5e;
  }
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