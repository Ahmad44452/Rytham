import {
  StyledOverlayContainer,
  StyledOverlayContainerSub,
  StyledOverlayCloseBtn
} from "../../styled-components/Overlay.styled";
import { GrClose } from 'react-icons/gr'

const CustomOverlay = ({ children, isOverlayShowing, setOverlayShowing }) => {

  return (
    isOverlayShowing ? (
      <StyledOverlayContainer>
        <StyledOverlayContainerSub>
          <StyledOverlayCloseBtn onClick={() => setOverlayShowing(false)}>
            <GrClose />
          </StyledOverlayCloseBtn>
          {children}
        </StyledOverlayContainerSub>
      </StyledOverlayContainer>
    ) : null
  )
}

export default CustomOverlay;