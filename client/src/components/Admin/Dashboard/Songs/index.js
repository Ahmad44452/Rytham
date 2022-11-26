import AdminNavbarHOC from "../AdminNavbarHOC";
import AdminDashboardAddHeader from "../reusables/AdminDashboardAddHeader";
import { StyledMainDashboardContainer } from "../../../../styled-components/Admin/Dashboard/MainDashboardContainer.styled";

const AdminDashboardSongs = () => {
  return (
    <StyledMainDashboardContainer>
      <AdminDashboardAddHeader heading='Songs' buttonText='Add Song' />
      <h1>ADMIN DASHBOARD SONGS SECTION</h1>
    </StyledMainDashboardContainer>

  )
}

export default AdminNavbarHOC(AdminDashboardSongs);