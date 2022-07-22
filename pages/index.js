import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../components/Header/Navbar";
import Hero from "../components/HeroSection/Hero";
import Slider from "../components/CardSlider/carousel";
import StillGotQuestions from "../components/StillGotEffect/StillGotQuestions";
import Footer from "../components/Footer/Footer";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1140,
      lgBig: 1450,
      xl: 1500,
      xxl: 1800,
      xxxl:2400
    },
  },
});

function index() {
  return (
    <>
    <ThemeProvider theme={theme} >
      <Navbar />
      <Hero />
      <Slider />
      <StillGotQuestions />
      <Footer />
      </ThemeProvider>
    </>
  );
}

export default index;
