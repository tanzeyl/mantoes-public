import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shoes from "./components/Shoes";
import LongBoot from "./components/LongBoot";
import ShortBoot from "./components/ShortBoot";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Shoes />} />
          <Route exact path="/longBoot" element={<LongBoot />} />
          <Route exact path="/shortBoot" element={<ShortBoot />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
