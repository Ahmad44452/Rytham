import { useParams } from "react-router-dom";
import axios from "axios";
import HomeLayout from "..";
import { useEffect, useState } from "react";
import * as StyledGetById from '../../../styled-components/Home/GetById.styled';
import { useDispatch } from "react-redux";
import { setPlayingSongInfo } from "../../../store/slices/playerSlice";

const GetArtistById = () => {

  const { artistId } = useParams();
  const [artistArtwork, setArtistArtwork] = useState(null);
  const [artistSongs, setArtistSongs] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {


    const controllerArtwork = new AbortController();
    const controllerSongs = new AbortController();
    (async () => {
      try {

        if (artistId) {
          const resArtwork = await axios.get(`/api/getArtistArtwork/${artistId}`, { signal: controllerArtwork.signal });
          setArtistArtwork(resArtwork.data);
          const resSongs = await axios.get(`/api/getSongsByArtist/${artistId}`, { signal: controllerSongs.signal });
          setArtistSongs(resSongs.data);
        }
      } catch (err) {
        console.log(err);
      }
    })();

    return () => {
      controllerArtwork.abort();
      controllerSongs.abort();
    }


  }, [artistId])

  return (
    <StyledGetById.Container>
      <StyledGetById.Header bgImg={artistArtwork}>

      </StyledGetById.Header>
      {artistArtwork && (<StyledGetById.HeaderImage src={artistArtwork} />)}

      {artistSongs && (artistSongs.length > 0) && (<StyledGetById.HeaderHeading>{artistSongs[0].ARTISTNAME}</StyledGetById.HeaderHeading>)}

      <StyledGetById.ItemsContainer>
        {
          artistSongs && (artistSongs.length > 0) && (artistSongs.map(item => (
            <StyledGetById.Item key={item.SONGID} onClick={() => dispatch(setPlayingSongInfo({ artwork: item.ALBUMARTWORK, name: item.SONGNAME, artist: item.ARTISTNAME, link: item.SONGLINK }))}>
              <StyledGetById.ItemImageWrapper>
                <img src={item.ALBUMARTWORK} alt={`${item.SONGNAME} Artwork`} />
                <img src={item.ALBUMARTWORK} alt={`${item.SONGNAME} Artwork`} />
              </StyledGetById.ItemImageWrapper>
              <h2>{item.SONGNAME}</h2>
              <h3>{item.ARTISTNAME}</h3>
            </StyledGetById.Item>
          )))
        }
      </StyledGetById.ItemsContainer>


    </StyledGetById.Container>
  )
}

export default HomeLayout(GetArtistById);