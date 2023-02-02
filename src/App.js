import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import AhonaAgroFarm from "./Pages/AhonaAgroFarm/AhonaAgroFarm";
import AhonaConstruction from "./Pages/AhonaConstruction/AhonaConstruction";
import AhonaEnterprize from "./Pages/AhonaEnterprize/AhonaEnterprize";
import ALMBricks from "./Pages/ALMBricks/ALMBricks";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Navbar/Header";
import NotFound from "./Pages/NotFound/NotFound";
import Company from "./Pages/OurCompany/Company";
import SRAgroFarm from "./Pages/SRAgroFarm/SRAgroFarm";
import SRNoorInternational from "./Pages/SRNoorInternational/SRNoorInternational";


function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/our-company" element={<Company />}></Route>
        <Route path="/ahona-construction" element={<AhonaConstruction/>}></Route>
        <Route path="/ahona-enterprize" element={<AhonaEnterprize/>}></Route>
        <Route path="/ahona-agro-farm" element={<AhonaAgroFarm/>}></Route>
        <Route path="/ahona-alm-bricks" element={<ALMBricks/>}></Route>
        <Route path="/ahona-sr-agro-farm" element={<SRAgroFarm/>}></Route>
        <Route path="/ahona-sr-noor-international" element={<SRNoorInternational/>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
