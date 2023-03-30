import React from "react";
import { Link } from "react-router-dom";
import allcons from "../../../asset/allcons.jpg";
import balu from "../../../asset/balu1.jpg";
import cement from "../../../asset/cement.jpg";
import banner1 from "../../../asset/galary1.jpeg";
import banner2 from "../../../asset/galary1.jpg";
import ispat from "../../../asset/ispat.jpg";
import sectionbalu from "../../../asset/sectionbalu.jpg";
import bricks from "../../../asset/vata.jpg";

import "./Construction.css";


const Construction = () => {
  return (
    <div>
      <h1 className="text-5xl text-center my-10 ">Construcs<span className="text-[#ff600e]">ti</span>on</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  py-10 px-5" id="construction">
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img src={bricks} alt="Shoes" className="h-[200px] w-[300px] rounded-xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-2xl">1. Bricks!</h2>
            <p className="text-[#727272]">Our Best Worker and make by House</p>
            <div className="card-actions">
               <Link className="btnn" to="/contact">Buy Now</Link>
            </div>
          </div>
        </div>
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img src={balu} alt="Shoes" className="h-[200px] w-[300px] rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">2. Balu!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
               <Link className="btnn" to="/contact">Buy Now</Link>
            </div>
          </div>
        </div>
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img src={cement} alt="Shoes" className="h-[200px] w-[300px] rounded-xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-2xl">3. Cement!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
               <Link className="btnn" to="/contact">Buy Now</Link>
            </div>
          </div>
        </div>
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img src={ispat} alt="Shoes" className="h-[200px] w-[300px] rounded-xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-2xl">4. Ispat!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
               <Link className="btnn" to="/contact">Buy Now</Link>
            </div>
          </div>
        </div>
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img src={sectionbalu} alt="Shoes" className="h-[200px] w-[300px] rounded-xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-2xl">5. Sectionbalu!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
               <Link className="btnn" to="/contact">Buy Now</Link>
            </div>
          </div>
        </div>
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img src={allcons} alt="Shoes" className="h-[200px] w-[300px] rounded-xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-2xl">6. allcons!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
               <Link className="btnn" to="/contact">Buy Now</Link>
            </div>
          </div>
        </div>
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img src={banner1} alt="Shoes" className="h-[200px] w-[300px] rounded-xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-2xl">7. WorkShrit!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
               <Link className="btnn" to="/contact">Buy Now</Link>
            </div>
          </div>
        </div>
        <div className="card  bg-white shadow-xl">
          <figure className="px-2 pt-2">
            <img src={banner2} alt="Shoes" className="h-[200px] w-[300px] rounded-xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-2xl">8. Work!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
               <Link className="btnn" to="/contact">Buy Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Construction;
