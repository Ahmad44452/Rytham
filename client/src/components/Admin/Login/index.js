// STYLED COMPONENTS START
import { useTheme } from "styled-components";
import {
  RythamLogo,
  AdminLoginError
} from "../../../styled-components/Admin/Login.styled";
import {
  StyledContainer,
  StyledContainerSub
} from "../../../styled-components/Containers.styled";
import {
  StyledInput,
  StyledButtonRound
} from '../../../styled-components/Inputs.styled';
import RythamLogoImg from '../../../images/RythamLogo.png';
// STYLED COMPONENTS END
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { loginAdminApi } from '../../../store/api/adminApi';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect } from "react";



const AdminLogin = () => {
  const navigate = useNavigate();
  const adminReducer = useSelector(state => state.adminReducer);

  const styledTheme = useTheme();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email is required!').email(),
      password: Yup.string().required('Password is required!')
    }),
    onSubmit: (values) => {
      dispatch(loginAdminApi(values.email, values.password));
    }
  });

  useEffect(() => {
    if (adminReducer.auth) {
      navigate('/admindashboard/albums')
    }
  }, [adminReducer, navigate]);

  return (
    <StyledContainer minHeight="100vh" backgroundColor={"#222"}>

      <StyledContainerSub backgroundColor={styledTheme.colors.main} padding="4rem 5rem" borderRadius="5px" textAlign="center">

        <RythamLogo src={RythamLogoImg} />

        <form onSubmit={formik.handleSubmit}>
          <StyledInput type={"email"} placeholder="Email" width={'35rem'} margin='0 0 2rem 0' {...formik.getFieldProps('email')} />
          <StyledInput type={"password"} placeholder="Password" width={'35rem'} margin='0 0 2rem 0' {...formik.getFieldProps('password')} />
          <AdminLoginError display={(formik.touched.email && formik.errors.email) || (formik.touched.password && formik.errors.password) || (adminReducer.loginError) ? 'block' : 'none'}>
            {
              (formik.touched.email && formik.errors.email ? formik.errors.email : null) ||
              (formik.touched.password && formik.errors.password ? formik.errors.password : null) ||
              (adminReducer.loginError)
            }
          </AdminLoginError>
          <StyledButtonRound type="submit"
            color={styledTheme.colors.main} backgroundColor={styledTheme.colors.logoRed} margin='2rem 0 0 0' hoverShadow={`0 1rem 2rem rgb(233 0 63 / 10%)`}
            activeShadow={`0 0.5rem 1rem rgb(233 0 63 / 10%)`}
          >
            Login
          </StyledButtonRound>
        </form>

      </StyledContainerSub>

    </StyledContainer>
  )
};

export default AdminLogin;