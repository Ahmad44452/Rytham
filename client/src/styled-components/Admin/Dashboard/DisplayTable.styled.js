import styled from "styled-components";

export const StyledDisplayTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;

  td, th {
    padding: 8px;

    svg{
      cursor: pointer;

      &:hover{
        color: red;
      }
    }
  }

  tbody tr{
    font-size: 1.8rem;
    border-bottom: 1px solid #B2B2B2;
    color: #3C4048;
  }

  tbody a{
    &:link,&:visited{
      text-decoration: none;
      color: blue;
    }
  }

  th {
    padding-top: .5rem;
    padding-bottom: 0rem;
    text-align: left;
    color: #B2B2B2;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 400;
  }
`;