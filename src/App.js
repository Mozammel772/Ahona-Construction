import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Navbar/Header";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
