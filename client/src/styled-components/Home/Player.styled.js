import styled from "styled-components";

export const StyledPlayer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.main};
  color: ${({ theme: { colors } }) => colors.secondary};
  border-top: 1px solid #5e5e5e;
`

export const StyledPlayerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3rem;
`

export const StyledPlayerInfo = styled.div`
  display: flex;
  align-items: center;

  img{
    width: 5.6rem;
    height: 5.6rem;
    object-fit: cover;
  }

  p{
    display: none;
  }
`;

export const StyledPlayerInfoText = styled.div`
margin-left: 1rem;

h2{
  font-size: 1.6rem;
  color: ${({ theme: { colors } }) => colors.themeWhite};
}

h3{
  font-size: 1.1rem;
  color: ${({ theme: { colors } }) => colors.secondary};
}
`;

export const StyledPlayerControls = styled.div`
  div{
    text-align: center;

    svg{
      width: 3rem;
      height: 3rem;
      color: ${({ color, theme: { colors } }) => color || colors.secondary};
      cursor: pointer;
    }
  }
`;

export const StyledPlayerVolume = styled.div`
display: flex;
align-items: center;
svg{
  margin-right: 1rem;
  width: 1.8rem;
  height: 1.8rem;
}
`;

export const StyledPlayerControlsSlider = styled.input`

  width: ${({ width }) => width || '400px'};
  height: 6px;
  -webkit-appearance: none;
  background: #111; 
  outline: none;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${({ theme: { colors } }) => colors.secondary};
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 1);
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme: { colors } }) => colors.logoRed};
    border: 3px solid #fff;
    cursor: pointer;
    box-shadow: -407px 0 0 400px ${({ theme: { colors } }) => colors.logoRed};
  }
`;