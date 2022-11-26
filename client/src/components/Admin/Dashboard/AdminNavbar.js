import {
  AdminNavbarStyled,
  AdminNavbarContainerStyled,
  AdminNavbarItemIconStyled,
  AdminNavbarItemTextStyled
} from "../../../styled-components/Admin/Dashboard/AdminNavbar.styled";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { MdAlbum, MdPerson, MdMusicNote } from 'react-icons/md'
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const adminReducer = useSelector(state => state.adminReducer)

  useEffect(() => {
    if (!adminReducer.auth) {
      navigate('/')
    }
  }, [adminReducer, navigate]);

  return (
    <>
      <AdminNavbarStyled>
        <AdminNavbarContainerStyled>

          <NavLink to="/admindashboard/albums" className={({ isActive }) => isActive ? 'navlink-active' : undefined}>
            <AdminNavbarItemIconStyled>
              <MdAlbum />
            </AdminNavbarItemIconStyled>

            <AdminNavbarItemTextStyled>
              Albums
            </AdminNavbarItemTextStyled>
          </NavLink>

          <NavLink to="/admindashboard/artists" className={({ isActive }) => isActive ? 'navlink-active' : undefined}>
            <AdminNavbarItemIconStyled>
              <MdPerson />
            </AdminNavbarItemIconStyled>

            <AdminNavbarItemTextStyled>
              Artists
            </AdminNavbarItemTextStyled>
          </NavLink>

          <NavLink to="/admindashboard/songs" className={({ isActive }) => isActive ? 'navlink-active' : undefined}>
            <AdminNavbarItemIconStyled>
              <MdMusicNote />
            </AdminNavbarItemIconStyled>

            <AdminNavbarItemTextStyled>
              Songs
            </AdminNavbarItemTextStyled>
          </NavLink>

        </AdminNavbarContainerStyled>
      </AdminNavbarStyled>
    </>
  )
}

export default AdminNavbar;