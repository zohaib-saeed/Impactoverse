import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      xm: 400,
      sm: 600,
      sml: 710,
      md: 900,
      mdl: 1100,
      mdlx: 1200,
      lg: 1350,
      xl: 1500,
    },
  },
});

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider theme={theme} >
        <main>{children}</main>
      </ThemeProvider>
    </>
  )
}