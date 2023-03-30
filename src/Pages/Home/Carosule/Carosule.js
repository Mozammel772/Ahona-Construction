import React from "react";
import Carosule4 from "../../../asset/bg2.jpg";
import Carosule5 from "../../../asset/bg3.jpeg";
import Carosule2 from "../../../asset/carosule2.jpg";
import Carosule3 from "../../../asset/carosule3.jpg";
import "./Carosule.css";

const Carosule = () => {
  return (
    <div>
      <div class="carousel w-full">
        <div id="slide2" class="carousel-item relative w-full">
          <img
            src={Carosule4}
            class="w-full h-[500px] rounded image-container"
            alt="Avator"
          />
          <div class="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div>
              <a href="#slide2" class="btn btn-circle">
                ❮
              </a>
            </div>

            <div>
              <a href="#slide2" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src={Carosule5} class="w-full h-[500px] rounded" alt="Avator" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 items-center">
            <div>
              <a href="#slide3" class="btn btn-circle">
                ❮
              </a>
            </div>

            <div>
              <a href="#slide3" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img src={Carosule2} class="w-full h-[500px] rounded" alt="Avator" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 items-center">
            <div>
              <a href="#slide4" class="btn btn-circle">
                ❮
              </a>
            </div>

            <div>
              <a href="#slide4" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div id="slide5" class="carousel-item relative w-full">
          <img src={Carosule3} class="w-full h-[500px] rounded" alt="Avator" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 items-center">
            <div>
              <a href="#slide5" class="btn btn-circle">
                ❮
              </a>
            </div>

            <div>
              <a href="#slide5" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carosule;
