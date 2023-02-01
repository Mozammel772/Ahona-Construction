import React from "react";
import CompanyList from "../CompanyList/CompanyList";
import Construction from "../Construction/Construction";
import OurService from "../OurService/OurService";

const Home = () => {
  return (
    <div>
      <OurService/>
      <Construction/>
      <CompanyList/>
    </div>
  );
};

export default Home;
