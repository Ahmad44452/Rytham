import HomeLayout from "..";
import * as StyledBrowsePage from '../../../styled-components/Home/BrowsePage.styled';
import { useSelector } from "react-redux";

const BrowseAlbums = () => {

  const albums = useSelector(state => state.albumsReducer.albums);


  return (
    <StyledBrowsePage.MainContainer>
      <StyledBrowsePage.MainHeading>
        Albums
      </StyledBrowsePage.MainHeading>

      <StyledBrowsePage.ItemsContainer>
        {
          albums ? albums.map(item => (
            <StyledBrowsePage.Item key={item.ALBUMID} to={`/albums/${item.ALBUMID}`}>
              <StyledBrowsePage.ItemImageWrapper>
                <img src={item.ALBUMARTWORK} alt={`${item.ALBUMNAME} Artwork`} />
                <img src={item.ALBUMARTWORK} alt={`${item.ALBUMNAME} Artwork`} />
              </StyledBrowsePage.ItemImageWrapper>
              <h2>{item.ALBUMNAME}</h2>
              <h3>{item.ARTISTNAME}</h3>
            </StyledBrowsePage.Item>
          )) : null
        }


      </StyledBrowsePage.ItemsContainer>

    </StyledBrowsePage.MainContainer>

  )
}

export default HomeLayout(BrowseAlbums);