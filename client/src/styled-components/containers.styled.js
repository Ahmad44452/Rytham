import styled from 'styled-components';

export const StyledContainer = styled.div`
  min-height: ${({ minHeight }) => minHeight || 'auto'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledContainerSub = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor || 'auto'};
  border-radius: ${({ borderRadius }) => borderRadius || '0px'};
  padding: ${({ padding }) => padding || '0rem'};
  text-align: ${({ textAlign }) => textAlign || 'auto'};
`;