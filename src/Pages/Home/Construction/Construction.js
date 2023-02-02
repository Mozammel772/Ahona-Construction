import React from "react";
import banner1 from "../../../asset/galary1.jpeg";
import banner2 from "../../../asset/galary1.jpg";
import banner3 from "../../../asset/galary2.jpeg";
import "./Construction.css";


const Construction = () => {
  return (
    <div>
      <h1 className="text-5xl text-center my-10 ">Construcs<span className="text-[#ff600e]">ti</span>on</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  py-10 px-5" id="construction">
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img src={banner1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-2xl">Worker!</h2>
            <p className="text-[#727272]">Our Best Worker and make by House</p>
            <div className="card-actions">
              <button className="btnn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img src={banner1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btnn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img src={banner2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-2xl">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btnn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img src={banner3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-2xl">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btnn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Construction;
