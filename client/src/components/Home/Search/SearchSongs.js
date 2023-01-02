import { useEffect, useState } from "react";
import axios from "axios";
import * as StyledBrowsePage from '../../../styled-components/Home/BrowsePage.styled';
import { useDispatch } from "react-redux";
import { setPlayingSongInfo } from "../../../store/slices/playerSlice";

const SearchSongs = ({ searchQuery }) => {

  const [songs, setSongs] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {


    const controller = new AbortController();

    (async () => {
      try {

        const res = await axios.get(`/api/searchSongs/${searchQuery}`, { signal: controller.signal });
        setSongs(res.data);

      } catch (err) {
        console.log(err);
      }
    })();

    return () => {
      controller.abort();
    }


  }, [searchQuery]);

  return (
    <>
      <StyledBrowsePage.ItemsContainer>
        {
          songs ?
            (
              songs.length === 0 ? <h2 style={{ fontSize: '2.5rem', color: '#fff' }}>No Songs Found</h2> :
                songs.map(item => (
                  <StyledBrowsePage.Item key={item.SONGID} onClick={() => dispatch(setPlayingSongInfo({ artwork: item.ALBUMARTWORK, name: item.SONGNAME, artist: item.ARTISTNAME, link: item.SONGLINK }))}>
                    <StyledBrowsePage.ItemImageWrapper>
                      <img src={item.ALBUMARTWORK} alt={`${item.SONGNAME} Artwork`} />
                      <img src={item.ALBUMARTWORK} alt={`${item.SONGNAME} Artwork`} />
                    </StyledBrowsePage.ItemImageWrapper>
                    <h2>{item.SONGNAME}</h2>
                    <h3>{item.ARTISTNAME}</h3>
                  </StyledBrowsePage.Item>
                )

                )) : null
        }


      </StyledBrowsePage.ItemsContainer>
    </>
  )
}

export default SearchSongs;