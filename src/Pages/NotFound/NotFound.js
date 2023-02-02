import React from "react";
import notFound from "../../asset/not.gif";

const NotFound = () => {
  return (
    <div >
      <img style={{
        height: "100vh",
        width: "100%"
      }} src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
