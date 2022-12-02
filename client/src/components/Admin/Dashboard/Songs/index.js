import AdminNavbarHOC from "../AdminNavbarHOC";
import AdminDashboardAddHeader from "../reusables/AdminDashboardAddHeader";
import { StyledMainDashboardContainer } from "../../../../styled-components/Admin/Dashboard/MainDashboardContainer.styled";
import { StyledContainerSub } from "../../../../styled-components/Containers.styled";
import { StyledHeading1 } from "../../../../styled-components/Headings.styled";
import { StyledInput, StyledDropdown, StyledDropdownBox, StyledButtonSquare, StyledDropdownBoxText, StyledDropdownBoxImg, StyledDropdownOptionsContainer, StyledDropdownOption } from "../../../../styled-components/Inputs.styled";
import { StyledBottomLine } from "../../../../styled-components/Utilities.styled";
import CustomOverlay from "../../../utilities/overlay";
import { addSongApi } from "../../../../store/api/songApi";
import { StyledDisplayTable } from "../../../../styled-components/Admin/Dashboard/DisplayTable.styled";
import { deleteSongApi } from "../../../../store/api/songApi";
import { AiFillCaretDown } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useTheme } from "styled-components";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';

const AdminDashboardSongs = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector(state => state);
  const styledTheme = useTheme();
  const [isOverlayShowing, setOverlayShowing] = useState(false);
  const [isDropdownShowing, setDropdownShowing] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('Select Album');

  const formik = useFormik({
    initialValues: {
      songName: '',
      albumId: '',
      songLink: ''
    },
    validationSchema: Yup.object({
      songName: Yup.string().required('Song name is required!'),
      albumId: Yup.string().required('Album id is required!'),
      songLink: Yup.string().required('Song link is required!')
    }),
    onSubmit: (values) => {
      setDropdownValue('Select Album');
      dispatch(addSongApi(values.songName, values.albumId, values.songLink))
      formik.resetForm();
      setOverlayShowing(false);
    }
  });

  return (
    <>
      <StyledMainDashboardContainer>
        <AdminDashboardAddHeader heading='Songs' buttonText='Add Song' setOverlayShowing={setOverlayShowing} />

        <StyledContainerSub>

          <StyledDisplayTable>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Album</th>
                <th>Artist</th>
                <th>Link</th>
                <th></th>
              </tr>
            </thead>

            <tbody>

              {
                reduxState.songsReducer.songs ? reduxState.songsReducer.songs.map((item) => (
                  <tr key={item.SONGID}>
                    <td>{item.SONGID}</td>
                    <td>{item.SONGNAME}</td>
                    <td>{item.ALBUMNAME}</td>
                    <td>{item.ARTISTNAME}</td>
                    <td>
                      <a href={item.SONGLINK} target='_blank' rel="noreferrer">song</a>
                    </td>
                    <td>
                      <RiDeleteBin6Line onClick={() => { dispatch(deleteSongApi(item.SONGID)) }} />
                    </td>
                  </tr>
                )) : null
              }

            </tbody>
          </StyledDisplayTable>
        </StyledContainerSub>

      </StyledMainDashboardContainer>

      <CustomOverlay isOverlayShowing={isOverlayShowing} setOverlayShowing={setOverlayShowing}>
        <StyledContainerSub textAlign='center' padding='2rem 4rem'>
          <div style={{ position: "relative" }}>
            <StyledHeading1 fontSize={styledTheme.fontSizes.large} fontWeight={300}>
              ADD SONG
            </StyledHeading1>
            <StyledBottomLine />
          </div>

          <form onSubmit={formik.handleSubmit}>
            <StyledInput type={"text"} placeholder="Song Name" width={'35rem'} margin='5rem 0 2rem 0' border='1px solid #000' {...formik.getFieldProps('songName')} />
            <StyledInput type={"text"} placeholder="Song Link" width={'35rem'} margin='2.5rem 0 2rem 0' border='1px solid #000' {...formik.getFieldProps('songLink')} />
            <StyledDropdown>
              <StyledDropdownBox width={'35rem'} margin='2.5rem 0 3rem 0' border='1px solid #000' onClick={() => setDropdownShowing(state => !state)}>
                <StyledDropdownBoxText>{dropdownValue}</StyledDropdownBoxText>
                <StyledDropdownBoxImg> <AiFillCaretDown /> </StyledDropdownBoxImg>
              </StyledDropdownBox>
              {
                isDropdownShowing ? (
                  <StyledDropdownOptionsContainer>
                    {
                      reduxState.albumsReducer.albums.map(item => (
                        <StyledDropdownOption
                          onClick={() => {
                            setDropdownValue(`${item.ALBUMNAME}(${item.ARTISTNAME})`);
                            formik.setFieldValue('albumId', item.ALBUMID, true);
                            setDropdownShowing(false);
                          }}
                          key={item.ALBUMID} width={'35rem'}>
                          {item.ALBUMNAME}{`(${item.ARTISTNAME})`}
                        </StyledDropdownOption>
                      ))
                    }
                  </StyledDropdownOptionsContainer>
                ) : null
              }

            </StyledDropdown>

            <StyledButtonSquare type="submit"
              color={styledTheme.colors.main} backgroundColor={styledTheme.colors.logoRed} margin='2rem 0 0 0' hoverShadow={`0 1rem 2rem rgb(233 0 63 / 10%)`}
              activeShadow={`0 0.5rem 1rem rgb(233 0 63 / 10%)`}
            >
              ADD SONG
            </StyledButtonSquare>
          </form>
        </StyledContainerSub>
      </CustomOverlay>

    </>

  )
}

export default AdminNavbarHOC(AdminDashboardSongs);