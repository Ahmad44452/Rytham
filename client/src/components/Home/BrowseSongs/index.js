import HomeLayout from "..";
import * as StyledBrowsePage from '../../../styled-components/Home/BrowsePage.styled';
import { useSelector, useDispatch } from "react-redux";
import { setPlayingSongInfo } from "../../../store/slices/playerSlice";

const BrowseSongs = () => {

  const songs = useSelector(state => state.songsReducer.songs);
  const dispatch = useDispatch();


  return (
    <StyledBrowsePage.MainContainer>
      <StyledBrowsePage.MainHeading>
        Songs
      </StyledBrowsePage.MainHeading>

      <StyledBrowsePage.ItemsContainer>
        {
          songs ? songs.map(item => (
            <StyledBrowsePage.Item key={item.SONGID} onClick={() => dispatch(setPlayingSongInfo({ artwork: item.ALBUMARTWORK, name: item.SONGNAME, artist: item.ARTISTNAME, link: item.SONGLINK }))}>
              <StyledBrowsePage.ItemImageWrapper>
                <img src={item.ALBUMARTWORK} alt={`${item.SONGNAME} Artwork`} />
                <img src={item.ALBUMARTWORK} alt={`${item.SONGNAME} Artwork`} />
              </StyledBrowsePage.ItemImageWrapper>
              <h2>{item.SONGNAME}</h2>
              <h3>{item.ARTISTNAME}</h3>
            </StyledBrowsePage.Item>
          )) : null
        }

      </StyledBrowsePage.ItemsContainer>

    </StyledBrowsePage.MainContainer>

  )
}

export default HomeLayout(BrowseSongs);