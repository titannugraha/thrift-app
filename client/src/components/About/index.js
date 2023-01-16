import React from "react";
import "./style.css";

const About = () => {
  return (
    <div id="about">
      
        <div className="about-header" >
          <h1>About Us</h1>
        </div>
        <div className="row my-3">
          <div className="col-4">
            <div className="card-about ">
              <img
                src="https://images.pexels.com/photos/5604022/pexels-photo-5604022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body my-3">
                <h5 className="card-title">New Brand</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card-about ">
              <img
                src="https://images.pexels.com/photos/5604022/pexels-photo-5604022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body my-3">
                <h5 className="card-title">Quality Guaranted </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card-about  ">
              <img
                src="https://images.pexels.com/photos/5604022/pexels-photo-5604022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body my-3">
                <h5 className="card-title">Always Open</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default About;
