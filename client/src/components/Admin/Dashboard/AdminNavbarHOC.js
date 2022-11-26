import AdminNavbar from "./AdminNavbar"

const AdminNavbarHOC = (SectionComponent) => () => {

  return (
    <>
      <AdminNavbar />
      <SectionComponent />
    </>
  )
}

export default AdminNavbarHOC;