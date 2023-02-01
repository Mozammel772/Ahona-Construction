import { Route, Routes } from "react-router-dom";
import "./App.css";
import Carosule from "./Pages/Carosule/Carosule";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Navbar/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Carosule/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
