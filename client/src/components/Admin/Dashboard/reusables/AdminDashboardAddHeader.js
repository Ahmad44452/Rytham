import { StyledButtonRound } from "../../../../styled-components/Inputs.styled";
import { StyledHeading1 } from "../../../../styled-components/Headings.styled";
import { StyledContainer } from "../../../../styled-components/Containers.styled";
import { useTheme } from "styled-components";
import { StyledBottomLine } from "../../../../styled-components/Utilities.styled";
const AdminDashboardAddHeader = ({ heading, buttonText }) => {
  const styledTheme = useTheme();

  return (

    <StyledContainer justifyContent='space-between' alignItems='center' padding='1rem'>
      <StyledHeading1 fontSize={styledTheme.fontSizes.large} fontWeight={300}>{heading}</StyledHeading1>
      <StyledButtonRound backgroundColor={styledTheme.colors.logoRed} borderRadius={'8px'} color={styledTheme.colors.white}>
        {buttonText}
      </StyledButtonRound>
      <StyledBottomLine />
    </StyledContainer>
  )
}

export default AdminDashboardAddHeader;