import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import Services from "./components/ServicePage/Service";
import PartnerSection from "./components/Partners/partners";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="our-services" element={<Services />} />          
        </Routes>
        <PartnerSection/>
        <Footer />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
