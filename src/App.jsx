import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Landing from "./components/layout/Landing";
import Packages from "./pages/Packages";
import About from "./pages/About";
import TourInfo from "./pages/TourInfo";

const App = () => {
  return (
    <BrowserRouter>
      <Landing>
        <Routes>
          <Route index element={<Index />} />
          <Route path="packages" element={<Packages />} />
          <Route path="about" element={<About />} />
          <Route path="tour" element={<TourInfo />} />
        </Routes>
      </Landing>
    </BrowserRouter>
  );
};

export default App;
