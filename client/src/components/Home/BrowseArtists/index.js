import HomeLayout from "..";
import * as StyledBrowsePage from '../../../styled-components/Home/BrowsePage.styled';
import { useSelector } from "react-redux";

const BrowseArtists = () => {

  const artists = useSelector(state => state.artistsReducer.artists);


  return (
    <StyledBrowsePage.MainContainer>
      <StyledBrowsePage.MainHeading>
        Artists
      </StyledBrowsePage.MainHeading>

      <StyledBrowsePage.ItemsContainer>
        {
          artists ? artists.map(item => (
            <StyledBrowsePage.Item key={item.ARTISTID} to={`/artists/${item.ARTISTID}`}>
              <StyledBrowsePage.ItemImageWrapper>
                <img src={item.ARTISTARTWORK} alt={`${item.ARTISTNAME} Artwork`} />
                <img src={item.ARTISTARTWORK} alt={`${item.ARTISTNAME} Artwork`} />
              </StyledBrowsePage.ItemImageWrapper>
              <h2>{item.ARTISTNAME}</h2>
            </StyledBrowsePage.Item>
          )) : null
        }

      </StyledBrowsePage.ItemsContainer>

    </StyledBrowsePage.MainContainer>

  )
}

export default HomeLayout(BrowseArtists);