import React from "react";
import banner1 from "../../../asset/banner1.jpg";
import "./OurService.css";

const OurService = () => {
  return (
    <div className="my-10">
      <h1 className="text-5xl text-[#727272] font-bold text-center my-3">
        Our <span className="text-[#ff900e]">Work</span>
      </h1>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner1}
            className="w-full rounded-lg shadow-2xl "
            alt="Avator"
          />
          <div>
            <h1 className="text-5xl font-bold text-[#707070]">Work <span className="text-[#ff900e]">Now</span> !</h1>
            <p className="py-6 w-full font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              asperiores amet voluptas veritatis, pariatur libero saepe suscipit
              assumenda animi totam architecto laborum! Repudiandae eligendi
              earum nulla deserunt autem, totam hic fugit tenetur? Expedita, quo
              perferendis hic, alias voluptatum quae voluptatibus deserunt
              magnam dolore nam itaque necessitatibus assumenda quam a.
            </p>
            <button id="btn">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
