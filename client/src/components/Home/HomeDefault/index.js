import {
  StyledItems,
  StyledItemsHeader,
  StyledItemsHeading,
  StyledItemsBrowseAll,
  StyledItemsContainer,
  StyledItemsItem,
  StyledItemsImageWrapper
} from '../../../styled-components/Home/HomeItems.Styled';
import { useSelector } from 'react-redux';
import { AiOutlineArrowRight } from 'react-icons/ai';
import HomeLayout from '..';
import { setPlayingSongInfo } from '../../../store/slices/playerSlice';
import { useDispatch } from 'react-redux';

const HomeDefault = () => {

  const reduxState = useSelector(state => state);
  const albums = reduxState.albumsReducer.albums.slice(0, 10);
  const artists = reduxState.artistsReducer.artists.slice(0, 10);
  const songs = reduxState.songsReducer.songs.slice(0, 10);

  const dispatch = useDispatch();

  return (
    <>
      <StyledItems>
        <StyledItemsHeader>
          <StyledItemsHeading>Albums</StyledItemsHeading>
          <StyledItemsBrowseAll to={'/albums'} >Browse All<AiOutlineArrowRight /></StyledItemsBrowseAll>
        </StyledItemsHeader>
        <StyledItemsContainer>
          {
            albums ? albums.map(item => (
              <StyledItemsItem key={item.ALBUMID} to={`/albums/${item.ALBUMID}`}>
                <StyledItemsImageWrapper>
                  <img src={item.ALBUMARTWORK} alt={`${item.ALBUMNAME} Artwork`} />
                  <img src={item.ALBUMARTWORK} alt={`${item.ALBUMNAME} Artwork`} />
                </StyledItemsImageWrapper>
                <h2>{item.ALBUMNAME}</h2>
                <h3>{item.ARTISTNAME}</h3>
              </StyledItemsItem>
            )) : null
          }

        </StyledItemsContainer>
      </StyledItems>

      <StyledItems>
        <StyledItemsHeader>
          <StyledItemsHeading>Artists</StyledItemsHeading>
          <StyledItemsBrowseAll to={'/artists'}>Browse All<AiOutlineArrowRight /></StyledItemsBrowseAll>
        </StyledItemsHeader>
        <StyledItemsContainer>
          {
            artists ? artists.map(item => (
              <StyledItemsItem key={item.ARTISTID} to={`/artists/${item.ARTISTID}`}>
                <StyledItemsImageWrapper>
                  <img src={item.ARTISTARTWORK} alt={`${item.ARTISTNAME} Artwork`} />
                  <img src={item.ARTISTARTWORK} alt={`${item.ARTISTNAME} Artwork`} />
                </StyledItemsImageWrapper>
                <h2>{item.ARTISTNAME}</h2>
              </StyledItemsItem>
            )) : null
          }

        </StyledItemsContainer>
      </StyledItems>

      <StyledItems>
        <StyledItemsHeader>
          <StyledItemsHeading>Songs</StyledItemsHeading>
          <StyledItemsBrowseAll to={'/songs'}>Browse All<AiOutlineArrowRight /></StyledItemsBrowseAll>
        </StyledItemsHeader>
        <StyledItemsContainer>
          {
            songs ? songs.map(item => (
              <StyledItemsItem key={item.SONGID} onClick={() => dispatch(setPlayingSongInfo({ artwork: item.ALBUMARTWORK, name: item.SONGNAME, artist: item.ARTISTNAME, link: item.SONGLINK }))}>
                <StyledItemsImageWrapper>
                  <img src={item.ALBUMARTWORK} alt={`${item.SONGNAME} Artwork`} />
                  <img src={item.ALBUMARTWORK} alt={`${item.SONGNAME} Artwork`} />
                </StyledItemsImageWrapper>
                <h2>{item.SONGNAME}</h2>
                <h3>{item.ARTISTNAME}</h3>
              </StyledItemsItem>
            )) : null
          }

        </StyledItemsContainer>
      </StyledItems>
    </>
  )
}

export default HomeLayout(HomeDefault);