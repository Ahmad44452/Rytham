import styled from "styled-components"

export const StyledHeading1 = styled.h1`
  text-transform: uppercase;
  color: ${({ color }) => color || '#fff'};
  margin: ${({ margin }) => margin || 'auto'};
  font-size: ${({ fontSize }) => fontSize || 'auto'}
`;