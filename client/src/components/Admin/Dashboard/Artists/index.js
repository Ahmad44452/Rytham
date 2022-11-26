import AdminNavbarHOC from "../AdminNavbarHOC";
import AdminDashboardAddHeader from "../reusables/AdminDashboardAddHeader";
import { StyledMainDashboardContainer } from "../../../../styled-components/Admin/Dashboard/MainDashboardContainer.styled";

const AdminDashboardArtists = () => {
  return (
    <StyledMainDashboardContainer>
      <AdminDashboardAddHeader heading='Artists' buttonText='Add Artist' />
      <h1>ADMIN DASHBOARD ARTISTS SECTION</h1>
    </StyledMainDashboardContainer>

  )
}

export default AdminNavbarHOC(AdminDashboardArtists);