import styled from "styled-components"

export const StyledHeading1 = styled.h1`
  text-transform: uppercase;
  color: ${({ color }) => color || 'auto'};
  margin: ${({ margin }) => margin || 'inital'};
  font-size: ${({ fontSize }) => fontSize || 'auto'};
  font-weight: ${({ fontWeight }) => fontWeight || 'auto'};
`;