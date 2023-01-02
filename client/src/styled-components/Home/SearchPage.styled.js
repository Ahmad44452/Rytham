import styled from "styled-components";

export const AllTags = styled.div`
  padding: 1rem 5rem;
`;

export const Tag = styled.p`
  display: inline-block;
  font-size: 2rem;
  cursor: pointer;
  background-color: ${({ isClicked }) => {
    if (isClicked)
      return 'rgb(233, 0, 63, 1)';
    else
      return 'rgb(233, 0, 63, .3)';
  }};
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 999px;

  &:not(:first-child){
    margin-left: 1rem;
  }
`;