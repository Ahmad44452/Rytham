import { useParams } from "react-router-dom";
import HomeLayout from "..";
import * as StyledSearch from '../../../styled-components/Home/SearchPage.styled';

import SearchArtists from "./SearchArtists";
import SearchAlbums from "./SearchAlbums";
import SearchSongs from "./SearchSongs";
import { useState } from "react";

const SearchPage = () => {
  const { searchQuery } = useParams();
  const [searchType, setSearchType] = useState("ARTISTS");




  return (
    <div>
      <StyledSearch.AllTags>
        <StyledSearch.Tag onClick={() => setSearchType("ARTISTS")} isClicked={searchType === "ARTISTS" ? true : false}>Artists</StyledSearch.Tag>
        <StyledSearch.Tag onClick={() => setSearchType("ALBUMS")} isClicked={searchType === "ALBUMS" ? true : false}>Albums</StyledSearch.Tag>
        <StyledSearch.Tag onClick={() => setSearchType("SONGS")} isClicked={searchType === "SONGS" ? true : false}>Songs</StyledSearch.Tag>
      </StyledSearch.AllTags>
      {
        searchType === "ARTISTS" ? <SearchArtists searchQuery={searchQuery} /> : null
      }

      {
        searchType === "ALBUMS" ? <SearchAlbums searchQuery={searchQuery} /> : null
      }

      {
        searchType === "SONGS" ? <SearchSongs searchQuery={searchQuery} /> : null
      }



    </div>
  )
}

export default HomeLayout(SearchPage);