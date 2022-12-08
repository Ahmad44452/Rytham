import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    main: '#121212',
    secondary: '#c4c4c4',
    themeWhite: '#e3dede',
    logoRed: "#E9003F",
    white: '#fff'
  },
  fontSizes: {
    small: "1.6rem",
    medium: "3.2rem",
    large: "4.8rem"
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default Theme;