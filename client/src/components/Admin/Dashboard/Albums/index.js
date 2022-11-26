import AdminNavbarHOC from "../AdminNavbarHOC";
import AdminDashboardAddHeader from "../reusables/AdminDashboardAddHeader";
import { StyledMainDashboardContainer } from "../../../../styled-components/Admin/Dashboard/MainDashboardContainer.styled";

const AdminDashboardAlbums = () => {



  return (
    <StyledMainDashboardContainer>
      <AdminDashboardAddHeader heading='Albums' buttonText='Add Album' />
      <h1>ADMIN DASHBOARD ALBUMS SECTION</h1>
    </StyledMainDashboardContainer>

  )
}

export default AdminNavbarHOC(AdminDashboardAlbums);