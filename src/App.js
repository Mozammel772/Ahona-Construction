import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Navbar/Header";
import NotFound from "./Pages/NotFound/NotFound";
import Company from "./Pages/OurCompany/Company";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/our-company" element={<Company/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
