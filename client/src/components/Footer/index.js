import React from "react";
import { BsInstagram, BsFacebook, BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import "./style.css";

const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <div className="footer-content mx-auto">
          <div className="footer-main-item">
            <div className="footer-item col-6 ">
              <h4>Thrift House</h4>
              <p>
                <strong>Store</strong> <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
              <h4>Follow Us</h4>
              <div className="social-link mb-3">
                <a className="me-3" href="#">
                  <BsInstagram />
                </a>
                <a href="#">
                  <BsFacebook />
                </a>
              </div>
            </div>
            <div className="footer-item col-6 ">
              <h4>Our Contact</h4>
              <p>
                <BsTelephone /> +021 14046{" "}
              </p>
              <p>
                <AiOutlineMail /> Thrift.house@example.com
              </p>
            </div>
          </div>
          <div className="footer-dev">
            <p>
              @Copyright 2023 Web Teams Technology Developer <br></br>
              Thrift House Company
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
