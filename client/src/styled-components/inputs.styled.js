import styled from 'styled-components';

export const StyledInput = styled.input`
  display: ${({ display }) => display || 'block'};
  margin: ${({ margin }) => margin || 'auto'};
  font-size: ${({ fontSize }) => fontSize || '1.8rem'};
  padding: ${({ padding }) => padding || '1.2rem'};
  border-radius: ${({ borderRadius }) => borderRadius || '2px'};
  width: ${({ width }) => width || 'auto'};
  
  &,&:focus{
    border: none;
    outline: none;
  }
`;

export const StyledButtonRound = styled.button`
  text-align: center;
  border: none;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .3s;
  background-color: ${({ backgroundColor }) => backgroundColor || 'auto'};
  margin: ${({ margin }) => margin || 'auto'};
  padding: ${({ padding }) => padding || '1rem 4rem'};
  border-radius: ${({ borderRadius }) => borderRadius || '999px'};
  font-weight: ${({ fontWeight }) => fontWeight || '600'};
  font-size: ${({ fontSize }) => fontSize || '1.7rem'};
  color: ${({ color }) => color || 'auto'};

  &:hover{
    transform: translateY(-3px);
    box-shadow: ${({ hoverShadow }) => hoverShadow || '0 1rem 2rem rgb(0 0 0 / 20%)'};
  }

  &:active{
    transform: translateY(-1px);
    box-shadow: ${({ activeShadow }) => activeShadow || '0 0.5rem 1rem rgb(0 0 0 / 20%)'};
  }
`;



