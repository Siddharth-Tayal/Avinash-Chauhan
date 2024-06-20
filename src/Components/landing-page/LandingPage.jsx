import * as React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
import ShuffleCards from "./components/ShuffleCards";
import LogoCollection from "./components/LogoCollection";
import Highlights from "./components/Highlights";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import getLPTheme from "./getLPTheme";
import Modal from "@mui/material/Modal";
import SignIn from "../sign-in/SignIn";
import Close from "@mui/icons-material/Close";
import Skills from "../Skills/Skills";
import DemoVideos from "./components/DemoVideos";
import Team from "./components/Team";

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100dvw",
        position: "fixed",
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label="Platform"
        sx={{
          backgroundColor: "background.default",
          "& .Mui-selected": {
            pointerEvents: "none",
          },
        }}
      >
        <ToggleButton value>
          <AutoAwesomeRoundedIcon sx={{ fontSize: "20px", mr: 1 }} />
          Custom theme
        </ToggleButton>
        <ToggleButton value={false}>Material Design 2</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.shape({
    valueOf: PropTypes.func.isRequired,
  }).isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

export default function LandingPage() {
  const [mode, setMode] = React.useState("light");
  const [showCustomTheme, setShowCustomTheme] = React.useState(false);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });
  const [login, setLogin] = React.useState(false);
  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar
        mode={mode}
        toggleColorMode={toggleColorMode}
        setLogin={setLogin}
      />
      <ShuffleCards />
      <Divider />
      {/* <Hero /> */}
      <Box sx={{ bgcolor: "background.default" }}>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        {/* <Pricing />
        <Divider /> */}
        <FAQ />
        <Divider />
        {/* <Skills mode={mode} /> */}
        <DemoVideos />
        <Divider />
        <Team />
        <Footer />
      </Box>
      {/* <ToggleCustomTheme
        showCustomTheme={showCustomTheme}
        toggleCustomTheme={toggleCustomTheme}
      /> */}
      <Modal
        open={login}
        onClose={() => setLogin(false)}
        className="flex items-center justify-center backdrop:blur-3xl "
      >
        <div className=" relative flex  items-center justify-center w-fit bg-white shadow-md shadow-slate-800">
          <Close
            className=" absolute top-5 right-5 cursor-pointer rounded-full text-slate-800 hover:bg-gray-200"
            onClick={() => setLogin(false)}
          />
          <SignIn />
        </div>
      </Modal>
    </ThemeProvider>
  );
}
