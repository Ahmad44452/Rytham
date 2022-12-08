import {
  StyledPlayer,
  StyledPlayerContainer,
  StyledPlayerInfo,
  StyledPlayerInfoText,
  StyledPlayerControls,
  StyledPlayerControlsSlider,
  StyledPlayerVolume
} from "../../../styled-components/Home/Player.styled";
import { useSelector, useDispatch } from "react-redux";
import { MdSkipPrevious, MdSkipNext, MdPlayArrow, MdPause } from 'react-icons/md';
import { HiSpeakerWave } from 'react-icons/hi2';
import { useTheme } from "styled-components";
import { useEffect, useRef, useState } from "react";
import { setSongPlaying } from "../../../store/slices/playerSlice";

const Player = () => {

  const styledTheme = useTheme();
  const playerReducer = useSelector(state => state.playerReducer);
  const dispatch = useDispatch();
  const audioRef = useRef();

  const playbackRangeSlide = (value) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }
  }

  const volumeRangeSlide = (value) => {
    if (audioRef.current) {
      audioRef.current.volume = (value / 100);
    }
  }

  useEffect(() => {
    if (playerReducer.isSongPlaying === false) {
      audioRef.current.pause();
    } else if (playerReducer.isSongPlaying === true) {
      audioRef.current.play();
    }
    console.log('hi');

    if (audioRef.current) {
      audioRef.current.onended = () => {
        dispatch(setSongPlaying(false));
        audioRef.current.currentTime = 0;
      }
    }

  }, [playerReducer.isSongPlaying, playerReducer.playingSongInfo, dispatch]);

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <StyledPlayer>
      <audio ref={audioRef} src={playerReducer.playingSongInfo.link ? playerReducer.playingSongInfo.link : null}>
      </audio>
      <StyledPlayerContainer>

        <StyledPlayerInfo>
          <img src={playerReducer.playingSongInfo.artwork ? playerReducer.playingSongInfo.artwork : 'https://static.vecteezy.com/system/resources/previews/002/249/673/original/music-note-icon-song-melody-tune-flat-symbol-free-vector.jpg'} alt='' />
          <StyledPlayerInfoText>
            <h2>{playerReducer.playingSongInfo.name ? playerReducer.playingSongInfo.name : 'Song'}</h2>
            <h3>{playerReducer.playingSongInfo.artist ? playerReducer.playingSongInfo.artist : 'Artist'}</h3>
          </StyledPlayerInfoText>
        </StyledPlayerInfo>

        <StyledPlayerControls>

          <div>
            <MdSkipPrevious />
            {
              playerReducer.isSongPlaying ? <MdPause color={styledTheme.colors.logoRed} onClick={() => dispatch(setSongPlaying(false))} />
                : <MdPlayArrow color={styledTheme.colors.logoRed} onClick={() => dispatch(setSongPlaying(true))} />
            }

            <MdSkipNext />
          </div>
          <StyledPlayerControlsSlider type="range" value={audioRef.current ? audioRef.current.currentTime.toString() : '0'} min="0"
            max={audioRef.current ? audioRef.current.duration.toString() : '100'} onChange={(e) => playbackRangeSlide(e.target.value)}
            onmousemove={(e) => playbackRangeSlide(e.target.value)}></StyledPlayerControlsSlider>
        </StyledPlayerControls>

        <StyledPlayerVolume>
          <HiSpeakerWave />
          <StyledPlayerControlsSlider width='10rem' type="range" value={audioRef.current ? (audioRef.current.volume * 100).toString() : '0'} min="0" max="100"
            onChange={(e) => volumeRangeSlide(e.target.value)}
            onmousemove={(e) => volumeRangeSlide(e.target.value)}></StyledPlayerControlsSlider>
        </StyledPlayerVolume>

      </StyledPlayerContainer>
    </StyledPlayer>

  )
}

export default Player;