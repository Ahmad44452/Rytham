import { StyledHomeNavbar, StyledHomeNavbarLink, StyledHomeNavbarSearch } from "../../../styled-components/Home/HomeNavbar.styled";
import { StyledInput } from '../../../styled-components/Inputs.styled';
import RythamLogoImg from '../../../images/RythamLogo.png'
import { AiOutlineSearch } from 'react-icons/ai';



const HomeNavbar = () => {
  return (
    <StyledHomeNavbar>
      <StyledHomeNavbarLink>
        <img src={RythamLogoImg} alt='Rytham Logo' />
      </StyledHomeNavbarLink>

      <StyledHomeNavbarSearch>
        <StyledInput placeholder="Type artist, album or song name"
          fontSize='1.3rem' padding='1.2rem 2rem 1.2rem 5.5rem' backgroundColor='transparent' color='#fff' border='1px solid #fff' borderRadius='999px' width='50rem' />
        <AiOutlineSearch />
      </StyledHomeNavbarSearch>
      <div></div>
    </StyledHomeNavbar>
  )
}

export default HomeNavbar;