import React from "react";
import Carosule from "../Carosule/Carosule";
import CompanyList from "../CompanyList/CompanyList";
import Construction from "../Construction/Construction";
import OurService from "../OurService/OurService";

const Home = () => {
  return (
    <div>
      <Carosule/>
      <OurService/>
      <Construction/>
      <CompanyList/>
    </div>
  );
};

export default Home;
