import React from "react";
import mern from '../assets/mern-stack.png'
import wordpress from '../assets/wordpress.png'
import dotnet from '../assets/dotnet.png'

const Services = () => {
  return (
    <div className="container" id="skill"  style={{ marginTop: "120px" }}>
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="lc-block">
            {/* <span editable="inline" className="small mt-4 d-block">LOREM IPSUM</span> */}
            <h2 editable="inline" className="display-2 mb-0">
              <b>My Skills & Expertise</b>
            </h2>
            <p editable="inline">
              {" "}
              
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="p-lg-5 p-4 shadow rounded-3 border">
            <div className="lc-block mb-4">
              <img
                alt=""
                className="img-fluid"
                src={mern}
                style={{ height: "10vh" }}
              />
              <h4 className="my-3" editable="inline">Mern Stack</h4>
              <p editable="inline">
              "Seamlessly blending MongoDB, Express.js, React, and Node.js to craft cutting-edge web applications."
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-lg-5 p-4 shadow rounded-3 border">
            <div className="lc-block mb-4">
              <img
                alt=""
                className="img-fluid"
                src={wordpress}
                style={{ height: "10vh" }}
              />

              <h4 className="my-3" editable="inline">WordPress</h4>
              <p editable="inline">
              "Elevating online presence with captivating, bespoke WordPress websites tailored to your unique brand."
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-lg-5 p-4 shadow rounded-3 border">
            <div className="lc-block mb-4">
              <img
                alt=""
                className="img-fluid"
                src={dotnet}
                style={{ height: "10vh" }}
              />

              <h4 className="my-3" editable="inline">Dot Net</h4>
              <p editable="inline">
                "Driving business efficiency through bespoke .NET solutions, powered by C#, ASP.NET, and more."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
