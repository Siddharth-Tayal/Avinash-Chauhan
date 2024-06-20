import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/landing-page/LandingPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;