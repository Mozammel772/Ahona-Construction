import { Route, Routes } from "react-router-dom";
import "./App.css";
import Carosule from "./Pages/Carosule/Carosule";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Navbar/Header";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Carosule/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
