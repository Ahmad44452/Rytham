import { StyledHomeNavbar, StyledHomeNavbarLink, StyledHomeNavbarSearch } from "../../../styled-components/Home/HomeNavbar.styled";
import { StyledInput } from '../../../styled-components/Inputs.styled';
import RythamLogoImg from '../../../images/RythamLogo.png'
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const HomeNavbar = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchQuery}`)
  }

  return (
    <StyledHomeNavbar>
      <StyledHomeNavbarLink to="/">
        <img src={RythamLogoImg} alt='Rytham Logo' />
      </StyledHomeNavbarLink>
      <form onSubmit={handleSubmit}>
        <StyledHomeNavbarSearch>

          <StyledInput placeholder="Type artist, album or song name"
            fontSize='1.3rem' padding='1.2rem 2rem 1.2rem 5.5rem' backgroundColor='transparent' color='#fff' border='1px solid #fff' borderRadius='999px' width='50rem'
            onChange={(e) => setSearchQuery(e.currentTarget.value)} />
          <AiOutlineSearch />
        </StyledHomeNavbarSearch>
      </form>

      <div></div>
    </StyledHomeNavbar>
  )
}

export default HomeNavbar;