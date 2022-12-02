import AdminNavbarHOC from "../AdminNavbarHOC";
import AdminDashboardAddHeader from "../reusables/AdminDashboardAddHeader";
import { StyledContainerSub } from "../../../../styled-components/Containers.styled";
import { StyledHeading1 } from "../../../../styled-components/Headings.styled";
import { StyledMainDashboardContainer } from "../../../../styled-components/Admin/Dashboard/MainDashboardContainer.styled";
import { StyledInput, StyledButtonSquare } from "../../../../styled-components/Inputs.styled";
import { StyledBottomLine } from "../../../../styled-components/Utilities.styled";
import { StyledDisplayTable } from "../../../../styled-components/Admin/Dashboard/DisplayTable.styled";
import CustomOverlay from "../../../utilities/overlay";
import { useState } from "react";
import { useTheme } from "styled-components";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addArtistApi, deleteArtistApi } from "../../../../store/api/artistApi";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBin6Line } from 'react-icons/ri'


const AdminDashboardArtists = () => {

  const [isOverlayShowing, setOverlayShowing] = useState(false);
  const dispatch = useDispatch();
  const artistsReducer = useSelector(state => state.artistsReducer);
  const styledTheme = useTheme();

  const formik = useFormik({
    initialValues: {
      artistName: '',
      artistArtwork: '',
    },
    validationSchema: Yup.object({
      artistName: Yup.string().required('Artist name is required!'),
      artistArtwork: Yup.string().required('Artist artwork is required!')
    }),
    onSubmit: (values) => {
      dispatch(addArtistApi(values.artistName, values.artistArtwork));
      formik.resetForm();
      setOverlayShowing(false);
    }
  });

  return (
    <>
      <StyledMainDashboardContainer>
        <AdminDashboardAddHeader heading='Artists' buttonText='Add Artist' setOverlayShowing={setOverlayShowing} />

        <StyledContainerSub>

          <StyledDisplayTable>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Artwork</th>
                <th></th>
              </tr>
            </thead>

            <tbody>

              {
                artistsReducer.artists ? artistsReducer.artists.map((item) => (
                  <tr key={item.ARTISTID}>
                    <td>{item.ARTISTID}</td>
                    <td>{item.ARTISTNAME}</td>
                    <td>
                      <a target='_blank' rel='noreferrer' href={item.ARTISTARTWORK}>{item.ARTISTARTWORK}</a>
                    </td>
                    <td>
                      <RiDeleteBin6Line onClick={() => { dispatch(deleteArtistApi(item.ARTISTID)) }} />
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
              ADD ARTIST
            </StyledHeading1>
            <StyledBottomLine />
          </div>

          <form onSubmit={formik.handleSubmit}>
            <StyledInput type={"text"} placeholder="Artist Name" width={'35rem'} margin='5rem 0 2rem 0' border='1px solid #000' {...formik.getFieldProps('artistName')} />
            <StyledInput type={"text"} placeholder="Artist Artwork" width={'35rem'} margin='2.5rem 0 3rem 0' border='1px solid #000' {...formik.getFieldProps('artistArtwork')} />

            <StyledButtonSquare type="submit"
              color={styledTheme.colors.main} backgroundColor={styledTheme.colors.logoRed} margin='2rem 0 0 0' hoverShadow={`0 1rem 2rem rgb(233 0 63 / 10%)`}
              activeShadow={`0 0.5rem 1rem rgb(233 0 63 / 10%)`}
            >
              ADD ARTIST
            </StyledButtonSquare>
          </form>
        </StyledContainerSub>
      </CustomOverlay>
    </>

  )
}

export default AdminNavbarHOC(AdminDashboardArtists);