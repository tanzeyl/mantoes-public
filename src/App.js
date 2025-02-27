import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shoes from "./components/Shoes";
import Footer from "./components/Footer";
import LongBoot from "./components/LongBoot";
import ShortBoot from "./components/ShortBoot";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Shoes />} />
          <Route exact path="/longBoot" element={<LongBoot />} />
          <Route exact path="/shortBoot" element={<ShortBoot />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
