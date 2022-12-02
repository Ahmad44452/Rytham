import styled from 'styled-components';

export const StyledInput = styled.input`
  display: ${({ display }) => display || 'block'};
  margin: ${({ margin }) => margin || 'inital'};
  font-size: ${({ fontSize }) => fontSize || '1.8rem'};
  padding: ${({ padding }) => padding || '1.2rem'};
  border-radius: ${({ borderRadius }) => borderRadius || '2px'};
  width: ${({ width }) => width || 'auto'};
  
  &,&:focus{
    border: none;
    outline: none;
  }

  border: ${({ border }) => (border + ' !important') || 'none'};
`;

export const StyledDropdown = styled.div`
  position: relative;
`;

export const StyledDropdownBox = styled.div`
  text-align: left;
  display: ${({ display }) => display || 'flex'};
  align-items: center;
  justify-content: space-between;
  padding: ${({ padding }) => padding || '1.2rem'};
  border-radius: ${({ borderRadius }) => borderRadius || '2px'};
  width: ${({ width }) => width || 'auto'};
  border: ${({ border }) => border || 'none'};
  margin: ${({ margin }) => margin || 'inital'};
  cursor: pointer;
`;

export const StyledDropdownBoxText = styled.div`
font-size: ${({ fontSize }) => fontSize || '1.8rem'};
`;

export const StyledDropdownBoxImg = styled.div`
  cursor: pointer;
  svg{
    width: 2rem;
    height: 2rem;
  }
`;

export const StyledDropdownOptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  background-color: #f1f1f1;
  max-width: 100%;
  max-height: 15rem;
  overflow-x: hidden;
`;

export const StyledDropdownOption = styled.div`
  width: ${({ width }) => width || 'auto'};
  padding: ${({ padding }) => padding || '.5rem 1.2rem'};
  font-size: ${({ fontSize }) => fontSize || '1.8rem'};
  text-align: left;
  cursor: pointer;
  &:hover{
    background-color: #dddddd;
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
  margin: ${({ margin }) => margin || 'inital'};
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


export const StyledButtonSquare = styled.button`
  text-align: center;
  border: 1px solid ${({ backgroundColor }) => backgroundColor};
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .3s;
  background-color: #fff;
  margin: ${({ margin }) => margin || 'inital'};
  padding: ${({ padding }) => padding || '1rem 4rem'};
  border-radius: ${({ borderRadius }) => borderRadius || '8px'};
  font-weight: ${({ fontWeight }) => fontWeight || '600'};
  font-size: ${({ fontSize }) => fontSize || '1.7rem'};
  color: ${({ backgroundColor }) => backgroundColor || 'auto'};

  &:hover{
    color: #fff;
    background-color: ${({ backgroundColor }) => backgroundColor || 'auto'};
    box-shadow: ${({ hoverShadow }) => hoverShadow || '0 1rem 2rem rgb(0 0 0 / 20%)'};
  }
`;



