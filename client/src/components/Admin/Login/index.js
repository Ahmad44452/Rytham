// STYLED COMPONENTS START
import { useTheme } from "styled-components";
import {
  RythamLogo
} from "../../../styled-components/Admin/login.styled";
import {
  StyledContainer,
  StyledContainerSub
} from "../../../styled-components/containers.styled";
import {
  StyledInput,
  StyledButtonRound
} from '../../../styled-components/inputs.styled';
import RythamLogoImg from '../../../images/RythamLogo.png';
// STYLED COMPONENTS END
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { loginAdminApi } from '../../../store/api/adminApi';



const AdminLogin = () => {
  const theme = useTheme();
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
      console.log(values)
      dispatch(loginAdminApi(values.email, values.password));
    }
  })

  return (
    <StyledContainer minHeight="100vh" backgroundColor={"#222"}>

      <StyledContainerSub backgroundColor={theme.colors.main} padding="4rem 5rem" borderRadius="5px" textAlign="center">

        <RythamLogo src={RythamLogoImg} />

        <form onSubmit={formik.handleSubmit}>
          <StyledInput type={"email"} placeholder="Email" width={'35rem'} margin='0 0 2rem 0' {...formik.getFieldProps('email')} />
          <StyledInput type={"password"} placeholder="Password" width={'35rem'} {...formik.getFieldProps('password')} />
          <StyledButtonRound type="submit"
            color={theme.colors.main} backgroundColor={theme.colors.logoRed} margin='4rem 0 0 0' hoverShadow={`0 1rem 2rem rgb(233 0 63 / 10%)`}
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