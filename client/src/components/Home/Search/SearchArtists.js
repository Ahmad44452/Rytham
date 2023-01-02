import { useEffect, useState } from "react";
import axios from "axios";
import * as StyledBrowsePage from '../../../styled-components/Home/BrowsePage.styled';

const SearchArtists = ({ searchQuery }) => {

  const [artists, setArtists] = useState(null);

  useEffect(() => {


    const controller = new AbortController();

    (async () => {
      try {

        const res = await axios.get(`/api/searchArtists/${searchQuery}`, { signal: controller.signal });
        setArtists(res.data);

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
          artists ?
            (
              artists.length === 0 ? <h2 style={{ fontSize: '2.5rem', color: '#fff' }}>No Artists Found</h2> :
                artists.map(item => (
                  <StyledBrowsePage.Item key={item.ARTISTID} to={`/artists/${item.ARTISTID}`}>
                    <StyledBrowsePage.ItemImageWrapper>
                      <img src={item.ARTISTARTWORK} alt={`${item.ARTISTNAME} Artwork`} />
                      <img src={item.ARTISTARTWORK} alt={`${item.ARTISTNAME} Artwork`} />
                    </StyledBrowsePage.ItemImageWrapper>
                    <h2>{item.ARTISTNAME}</h2>
                  </StyledBrowsePage.Item>
                )

                )) : null
        }

      </StyledBrowsePage.ItemsContainer>
    </>
  )
}

export default SearchArtists;