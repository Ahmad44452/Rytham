import AdminNavbarHOC from "../AdminNavbarHOC";
import AdminDashboardAddHeader from "../reusables/AdminDashboardAddHeader";
import { StyledMainDashboardContainer } from "../../../../styled-components/Admin/Dashboard/MainDashboardContainer.styled";
import { StyledContainerSub } from "../../../../styled-components/Containers.styled";
import { StyledHeading1 } from "../../../../styled-components/Headings.styled";
import { StyledInput, StyledDropdown, StyledDropdownBox, StyledButtonSquare, StyledDropdownBoxText, StyledDropdownBoxImg, StyledDropdownOptionsContainer, StyledDropdownOption } from "../../../../styled-components/Inputs.styled";
import CustomOverlay from "../../../utilities/overlay";
import { useState } from "react";
import { useFormik } from 'formik';
import { useTheme } from "styled-components";
import { StyledBottomLine } from "../../../../styled-components/Utilities.styled";
import { StyledDisplayTable } from "../../../../styled-components/Admin/Dashboard/DisplayTable.styled";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCaretDown } from 'react-icons/ai';
import * as Yup from 'yup';
import { addAlbumApi, deleteAlbumApi } from "../../../../store/api/albumApi";
import { RiDeleteBin6Line } from 'react-icons/ri';

const AdminDashboardAlbums = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector(state => state);
  const styledTheme = useTheme();
  const [isOverlayShowing, setOverlayShowing] = useState(false);
  const [isDropdownShowing, setDropdownShowing] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('Select Artist');

  const formik = useFormik({
    initialValues: {
      albumName: '',
      artistId: '',
      albumArtwork: ''
    },
    validationSchema: Yup.object({
      albumName: Yup.string().required('Album name is required!'),
      artistId: Yup.string().required('Artist id is required!'),
      albumArtwork: Yup.string().required('Album artwork is required!')
    }),
    onSubmit: (values) => {
      setDropdownValue('Select Artist');
      console.log(values);
      dispatch(addAlbumApi(values.albumName, values.artistId, values.albumArtwork))
      formik.resetForm();
      setOverlayShowing(false);
    }
  });

  return (
    <>
      <StyledMainDashboardContainer>
        <AdminDashboardAddHeader heading='Albums' buttonText='Add Album' setOverlayShowing={setOverlayShowing} />

        <StyledContainerSub>

          <StyledDisplayTable>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Artist</th>
                <th>Artwork</th>
                <th></th>
              </tr>
            </thead>

            <tbody>

              {
                reduxState.albumsReducer.albums ? reduxState.albumsReducer.albums.map((item) => (
                  <tr key={item.ALBUMID}>
                    <td>{item.ALBUMID}</td>
                    <td>{item.ALBUMNAME}</td>
                    <td>{item.ARTISTNAME}</td>
                    <td>
                      <a href={item.ALBUMARTWORK} target='_blank' rel="noreferrer">{item.ALBUMARTWORK}</a>
                    </td>
                    <td>
                      <RiDeleteBin6Line onClick={() => { dispatch(deleteAlbumApi(item.ALBUMID)) }} />
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
              ADD ALBUM
            </StyledHeading1>
            <StyledBottomLine />
          </div>

          <form onSubmit={formik.handleSubmit}>
            <StyledInput type={"text"} placeholder="Album Name" width={'35rem'} margin='5rem 0 2rem 0' border='1px solid #000' {...formik.getFieldProps('albumName')} />
            <StyledInput type={"text"} placeholder="Album Artwork" width={'35rem'} margin='2.5rem 0 2rem 0' border='1px solid #000' {...formik.getFieldProps('albumArtwork')} />
            <StyledDropdown>
              <StyledDropdownBox width={'35rem'} margin='2.5rem 0 3rem 0' border='1px solid #000' onClick={() => setDropdownShowing(state => !state)}>
                <StyledDropdownBoxText>{dropdownValue}</StyledDropdownBoxText>
                <StyledDropdownBoxImg> <AiFillCaretDown /> </StyledDropdownBoxImg>
              </StyledDropdownBox>
              {
                isDropdownShowing ? (
                  <StyledDropdownOptionsContainer>
                    {
                      reduxState.artistsReducer.artists.map(item => (
                        <StyledDropdownOption
                          onClick={() => {
                            setDropdownValue(item.ARTISTNAME);
                            formik.setFieldValue('artistId', item.ARTISTID, true);
                            setDropdownShowing(false);
                          }}
                          key={item.ARTISTID} width={'35rem'}>
                          {item.ARTISTNAME}
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
              ADD ALBUM
            </StyledButtonSquare>
          </form>
        </StyledContainerSub>

      </CustomOverlay>
    </>


  )
}

export default AdminNavbarHOC(AdminDashboardAlbums);