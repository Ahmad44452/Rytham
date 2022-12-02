import styled from 'styled-components';

export const RythamLogo = styled.img`
  width: 14rem;
  display: block;
  margin: 0 auto 3rem auto;
`;

export const AdminLoginError = styled.div`
  color: #881c59;
  background-color: #f8d7da;
  padding: .3rem 0;
  text-transform: uppercase;
  font-size: 1.5rem;
  border-radius: 5px;
  display: ${({ display }) => display};
`