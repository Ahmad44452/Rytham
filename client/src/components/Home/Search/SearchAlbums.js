import { useEffect, useState } from "react";
import axios from "axios";
import * as StyledBrowsePage from '../../../styled-components/Home/BrowsePage.styled';

const SearchAlbums = ({ searchQuery }) => {

  const [albums, setAlbums] = useState(null);

  useEffect(() => {


    const controller = new AbortController();

    (async () => {
      try {

        const res = await axios.get(`/api/searchAlbums/${searchQuery}`, { signal: controller.signal });
        setAlbums(res.data);

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
          albums ?
            (
              albums.length === 0 ? <h2 style={{ fontSize: '2.5rem', color: '#fff' }}>No Albums Found</h2> :
                albums.map(item => (
                  <StyledBrowsePage.Item key={item.ALBUMID} to={`/albums/${item.ALBUMID}`}>
                    <StyledBrowsePage.ItemImageWrapper>
                      <img src={item.ALBUMARTWORK} alt={`${item.ALBUMNAME} Artwork`} />
                      <img src={item.ALBUMARTWORK} alt={`${item.ALBUMNAME} Artwork`} />
                    </StyledBrowsePage.ItemImageWrapper>
                    <h2>{item.ALBUMNAME}</h2>
                    <h3>{item.ARTISTNAME}</h3>
                  </StyledBrowsePage.Item>
                )

                )) : null
        }


      </StyledBrowsePage.ItemsContainer>
    </>
  )
}

export default SearchAlbums;