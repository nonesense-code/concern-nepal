import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import About from "./components/AboutPage/About";
import Service from "./components/ServicePage/Service";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="our-services" element={<Service />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
