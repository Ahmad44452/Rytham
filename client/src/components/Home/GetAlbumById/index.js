import { useParams } from "react-router-dom";
import axios from 'axios';
import HomeLayout from "..";
import { useEffect, useState } from "react";
import * as StyledGetById from '../../../styled-components/Home/GetById.styled';
import { useDispatch } from "react-redux";
import { setPlayingSongInfo } from "../../../store/slices/playerSlice";


const GetAlbumById = () => {

  const { albumId } = useParams();
  const [albumArtwork, setAlbumArtwork] = useState(null);
  const [albumSongs, setAlbumSongs] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {


    const controllerArtwork = new AbortController();
    const controllerSongs = new AbortController();
    (async () => {
      try {

        if (albumId) {
          const resArtwork = await axios.get(`/api/getAlbumArtwork/${albumId}`, { signal: controllerArtwork.signal });
          setAlbumArtwork(resArtwork.data);
          const resSongs = await axios.get(`/api/getSongsByAlbum/${albumId}`, { signal: controllerSongs.signal });
          setAlbumSongs(resSongs.data);
        }
      } catch (err) {
        console.log(err);
      }
    })();

    return () => {
      controllerArtwork.abort();
      controllerSongs.abort();
    }


  }, [albumId])

  return (

    <StyledGetById.Container>
      <StyledGetById.Header bgImg={albumArtwork}>

      </StyledGetById.Header>
      {albumArtwork && (<StyledGetById.HeaderImage src={albumArtwork} />)}

      {albumSongs && (albumSongs.length > 0) && (<StyledGetById.HeaderHeading>{albumSongs[0].ALBUMNAME}</StyledGetById.HeaderHeading>)}

      <StyledGetById.ItemsContainer>
        {
          albumSongs && albumSongs.length > 0 && (albumSongs.map(item => (
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

export default HomeLayout(GetAlbumById);