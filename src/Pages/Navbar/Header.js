import React from "react";
import styled from "styled-components";
import logo from "../../asset/logo2.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <MainHeader>
      {/* <h1 className="text-3xl text-white font-bold font-sans">Ahona-construction</h1> */}
      <img className="rounded-md w-[150px]" src={logo} alt="" />
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 20px;
  height: 70px;
  background-color: #0061ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
