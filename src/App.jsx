import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/landing-page/LandingPage";
import EventsPage from "./Components/EventPage/EventPage.jsx";
import { useState } from "react";
import Error from "./Components/Error/Error.jsx";
function App() {
  const [mode, setMode] = useState("light");
  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/feature/:id" element={<EventsPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
