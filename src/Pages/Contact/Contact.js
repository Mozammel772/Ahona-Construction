import React from "react";
import call from "../../asset/icon/call.png";
import email from "../../asset/icon/email.png";
import location from "../../asset/icon/location.png";
import owner from "../../asset/photo_2023-03-29_20-38-38.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <h1 className=" text-4xl lg:text-6xl text-center my-10">
        Contact<span className="text-[#ff600e]"> With</span> Us
      </h1>
      <div className=" justify-around items-center hero-content flex-col lg:flex-row-reverse">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div
            id="contact"
            className="lg:w-[250px] lg:h-[200px] max-w-md card-body items-center text-center"
          >
            <img className="mx-auto" src={location} alt="Avator" />
            <h2 className="text-bold text-xl text-[#707064]">Address</h2>
            <h3 className="text-[#ff600e]">
              West Char tepakhola,
              <br /> Faridpur Sadar Faridpur
            </h3>
          </div>
          <div
            id="contact"
            className="lg:w-[250px] lg:h-[200px] max-w-md card-body items-center text-center"
          >
            <img src={call} alt="Avator" />
            <h2 className="text-bold text-xl text-[#707064]">Address</h2>
            <h3 className="text-[#ff600e]">+8801783890924 <br /> +8801715888823</h3>
          </div>
          <div
            id="contact"
            className="lg:w-[250px] lg:h-[200px] max-w-md card-body items-center text-center"
          >
            <img src={email} alt="Avator" />
            <h2 className="text-bold text-xl text-[#707064]">Address</h2>
            <h3 className="text-[#ff600e]">ahonaconstruction <br /> @gmail.com</h3>
          </div>
          <div
            id="contact"
            className="lg:w-[250px] lg:h-[200px] max-w-md card-body items-center text-center"
          >
            <img src={owner} alt="Avator"className="w-20 h-20 rounded-lg" />
            <h2 className="text-bold text-xl text-[#707064]">Owner</h2>
            <h3 className="text-[#ff600e]">ahona construction</h3>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <h1 className="text-2xl text-center font-bold">
                {" "}
                <span className="text-[#ff600e]">Contact</span> Us
              </h1>
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Phone</span>
              </label>
              <input
                type="phone"
                placeholder="Enter Your Phone Number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Message</span>
              </label>
              <textarea
                className="textarea textarea-info"
                placeholder="Enter Your Requriment"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btnn ">Submit Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
