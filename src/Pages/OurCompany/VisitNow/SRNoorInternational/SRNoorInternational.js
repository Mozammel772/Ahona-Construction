import React from "react";
import ahona1 from "../../../../asset/galary1.jpg";
import ahona from "../../../../asset/galary2.jpg";
import "./SRNoorInternational.css";

const SRNoorInternational = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold my-10 text-center">
        Welcome to <span className="text-[#ff600e]">Ahona</span> SR Noor International
      </h1>
      <div id="srNoorInternational" className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={ahona}
            className="w-full lg:h-[300px] rounded-lg shadow-2xl "
            alt="Avator"
          />
          <div>
            <h1 className="text-3xl font-bold">
              1. Build <span className="text-[#ff600e]">Enterprise</span> !
            </h1>
            <p className="py-6 w-full font-medium text-[#727272]">
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
      <div id="srNoorInternational" className="hero min-h-screen my-10 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={ahona1}
            className="w-full lg:h-[300px] rounded-lg shadow-2xl  "
            alt="Avator"
          />
          <div>
            <h1 className="text-3xl font-bold">
              1. Road <span className="text-[#ff600e]">Enterprise</span> !
            </h1>
            <p className="py-6 w-full font-medium text-[#727272]">
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
      <div id="srNoorInternational" className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={ahona}
            className="w-full lg:h-[300px] rounded-lg shadow-2xl "
            alt="Avator"
          />
          <div>
            <h1 className="text-3xl font-bold">
              1. Build <span className="text-[#ff600e]">Enterprise</span> !
            </h1>
            <p className="py-6 w-full font-medium text-[#727272]">
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

export default SRNoorInternational;
