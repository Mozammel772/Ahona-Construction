import React from 'react';
import Carosule2 from "../../asset/carosule2.jpg";
import Carosule3 from "../../asset/carosule3.jpg";

const Carosule = () => {
  return (
    <div>
          <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
              <img
                  style={{ background: "#000000"}}
                src={Carosule2}
                class="w-full h-[100vh]  rounded" alt='Avator'
              />
              <div
                class="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <div><a href="#slide4" class="btn btn-circle ">❮</a></div>
                <div class="text-center text-white">
                  <img
                
                    class="h-20 w-20 mx-auto my-3"
                    src="./images/146022.png"
                    alt="avator"
                  />
                  <h1 class="text-2xl font-bold">Awlad Hossain</h1>
                  <h1 class="text-xl my-3">UIX Designer</h1>
                  <p class="text[#707070]">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur.
                  </p>
                </div>
                <div><a href="#slide2" class="btn btn-circle">❯</a></div>
              </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
              <img
                
                src={Carosule2}
                class="w-full h-[500px] rounded" alt='Avator'
              />
              <div
                class="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <div><a href="#slide1" class="btn btn-circle">❮</a></div>
                <div class="text-center text-white">
                  <img
                    class="h-20 w-20 mx-auto my-3"
                    src="./images/146031.png"
                    alt="avator"
                  />
                  <h1 class="text-2xl font-bold">Kamrul Islam</h1>
                  <h1 class="text-xl my-3">Web Designer</h1>
                  <p class="text[#707070]">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur.
                  </p>
                </div>
                <div><a href="#slide3" class="btn btn-circle">❯</a></div>
              </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
              <img
                
                src={Carosule3}
                class="w-full h-[500px] rounded" alt='Avator'
              />
              <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 items-center"
              >
                <div><a href="#slide2" class="btn btn-circle">❮</a></div>
                <div class="text-center text-white">
                  <img
                    class="h-20 w-20 mx-auto my-3"
                    src={Carosule2}
                    alt="avator"
                  />
                  <h1 class="text-2xl font-bold">Mozammel Hosen</h1>
                  <h1 class="text-xl my-3">Web Development</h1>
                  <p class="text[#707070]">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur.
                  </p>
                </div>
                <div><a href="#slide4" class="btn btn-circle">❯</a></div>
              </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
              <img
                
                src="./images/closeup-gavel-judgement-concept.jpg"
                class="w-full h-[500px] rounded"
              />
              <div
                class="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <div><a href="#slide3" class="btn btn-circle">❮</a></div>
                <div class="text-center text-white">
                  <img
                    class="h-20 w-20 mx-auto my-3"
                    src="./images/146022.png"
                    alt="Avator"
                  />
                  <h1 class="text-2xl font-bold">Imdadul Hossain</h1>
                  <h1 class="text-xl my-3">Web Designer</h1>
                  <p class="text[#707070]">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur.
                  </p>
                </div>
                <div><a href="#slide1" class="btn btn-circle">❯</a></div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Carosule