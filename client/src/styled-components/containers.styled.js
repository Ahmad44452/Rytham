import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  min-height: ${({ minHeight }) => minHeight || 'auto'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'auto'};
  display: flex;
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  padding: ${({ padding }) => padding || '0'};
`;

export const StyledContainerSub = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor || 'auto'};
  border-radius: ${({ borderRadius }) => borderRadius || '0px'};
  padding: ${({ padding }) => padding || '0rem'};
  text-align: ${({ textAlign }) => textAlign || 'auto'};
`;