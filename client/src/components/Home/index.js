import Player from "./Player";
import HomeNavbar from "./Navbar";
import { StyledHome, StyledHomeTop, StyledHomeBottom } from "../../styled-components/Home/Home.Styled";

const HomeLayout = (MainHomeComponent) => () => {


  return (
    <>
      <StyledHome>
        <HomeNavbar />
        <StyledHomeTop>

          <MainHomeComponent />

        </StyledHomeTop>
        <StyledHomeBottom>
          <Player />
        </StyledHomeBottom>
      </StyledHome>


    </>
  )
}

export default HomeLayout;