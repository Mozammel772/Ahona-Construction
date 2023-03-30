import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Carosule4 from "../../../asset/bg2.jpg";
import Carosule5 from "../../../asset/bg3.jpeg";
// import "./Carosule.css";

var settings = {
  dots: true,
  infinite: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const Carosule = () => {
  return (
    <>
      <Slider {...settings}>
        <div>
          <img
            className="h-[400px] w-full"
            src={Carosule4}
            alt="Not Avaiable Image Silder"
          />
        </div>
        <div>
          <img
            className="h-[400px] w-full"
            src={Carosule5}
            alt="Not Avaiable Image Silder"
          />
        </div>
      </Slider>
    </>
  );
};

export default Carosule;
