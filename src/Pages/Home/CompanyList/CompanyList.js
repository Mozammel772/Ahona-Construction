import React from "react";
import ahonaAgro from "../../../asset/agero1.jpg";
import agro from "../../../asset/agro.jpg";
import alm from "../../../asset/alm.jpg";
import construction from "../../../asset/download.jpg";
import international from "../../../asset/ship-container.jpg";
import enterprize from "../../../asset/tata2.jpg";
import "./CompanyList.css";

const CompanyList = () => {
  return (
    <div>
      <h1 className="text-center my-20 text-5xl font-bold">
        Our <span className="text-[#ff600e]">Busnicess</span>
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  py-10 px-5"
        id="construction"
      >
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img
              src={international}
              alt="Shoes"
              className="rounded-xl h-[260px]"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-2xl">
              SR Noor International <span className="text-[#ff600e]">!</span>
            </h2>
            <p className="text-[#727272]">
              The Import Registration Certificate (IRC) of Bangladesh is a
              mandatory document to become an importer. In case you also plan to
              export from Bangladesh you must get an Export Registration
              Certificate (ERC).
            </p>
            <div className="card-actions">
              <button className="btnn">Contact Us</button>
            </div>
          </div>
        </div>
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img src={agro} alt="Shoes" className="rounded-xl h-[260px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">
              SR Agro Farm <span className="text-[#ff600e]">!</span>
            </h2>
            <p className="text-[#727272]">
              Is an agro based business center Her you will find live cattle
              such as COW GOAT BUFFALO we have BIO-GAS plant and we do surve
              BIO-GAS to nearest village people We also have compost manure
              plant
            </p>
            <div className="card-actions">
              <button className="btnn">Contact Now</button>
            </div>
          </div>
        </div>
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img src={alm} alt="Shoes" className="rounded-xl h-[260px]" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-2xl">
              ALM Bricks <span className="text-[#ff600e]">!</span>
            </h2>
            <p className="text-[#727272]">
              This file contains additional information such as Exif metadata
              which may have been added by the digital camera, scanner, or
              software program used to create or digitize it.
            </p>
            <div className="card-actions">
              <button className="btnn">Contact Us</button>
            </div>
          </div>
        </div>
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img src={ahonaAgro} alt="Shoes" className="rounded-xl h-[260px]" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-2xl">
              Ahona Agro Farm <span className="text-[#ff600e]">!</span>
            </h2>
            <p className="text-[#727272]">
              Is an agro based business center Her you will find live cattle
              such as COW GOAT BUFFALO we have BIO-GAS plant and we do surve
              BIO-GAS to nearest village people We also have compost manure
              plant.
            </p>
            <div className="card-actions">
              <button className="btnn">Contact Us</button>
            </div>
          </div>
        </div>
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img
              src={enterprize}
              alt="Shoes"
              className="rounded-xl h-[260px]"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-2xl">
              Ahona Enterprize <span className="text-[#ff600e]">!</span>
            </h2>
            <p className="text-[#727272]">
              Ahona Enterprise is all about finding new business opportunities
              and taking advantage of them to make a profit. An entrepreneur is
              an individual who takes a risk to start a business.
            </p>
            <div className="card-actions">
              <button className="btnn">Contact Us</button>
            </div>
          </div>
        </div>
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img
              src={construction}
              alt="Shoes"
              className="rounded-xl h-[260px]"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-2xl">
              Ahona Construction <span className="text-[#ff600e]">!</span>
            </h2>
            <p className="text-[#727272]">
              Ahona Construction is a general term meaning the art and science
              to form objects, systems, or organizations, and comes from Latin
              constructio and Old French construction. To construct is the verb
            </p>
            <div className="card-actions">
              <button className="btnn">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
