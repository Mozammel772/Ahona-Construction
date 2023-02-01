import React from "react";
import banner1 from "./../../asset/galary1.jpeg";
import banner2 from "./../../asset/galary1.jpg";
import banner3 from "./../../asset/galary2.jpeg";

const Construction = () => {
  return (
    <div>
      <h1 className="text-5xl text-center my-3 ">Construction</h1>
     <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
     <div className="card  bg-base-200 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={banner1}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
     <div className="card  bg-base-200 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={banner1}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
     <div className="card  bg-base-200 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={banner2}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
     <div className="card  bg-base-200 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={banner3}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Construction;
