import React from "react";
import agro from "../../asset/agro.jpg";
import alm from "../../asset/alm.jpg";

const CompanyList = () => {
  return (
    <div>
      <h1 className="text-center my-20 text-5xl font-bold">
        Our <span className="text-[#ff600e]">Busnicess</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  py-10 px-5" id="construction">
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img src={agro} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-2xl">SR Noor International</h2>
            <p className="text-[#727272]">Export & Import In The World Wide</p>
            <div className="card-actions">
              <button className="btnn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img src={agro} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">SR Agro Farm!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btnn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img src={alm} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-2xl">ALM Bricks!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btnn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img src={alm} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-2xl">Ahona Agro Farm!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btnn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img src={alm} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-2xl">Ahona Enterprize!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btnn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img src={alm} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-2xl">Ahona Construction!</h2>
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

export default CompanyList;
