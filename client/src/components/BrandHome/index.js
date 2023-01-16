import React from "react";
import "./style.css";
import BrandLogo from "../../assets/images/BrandLogo.svg";
import BrandLogo1 from "../../assets/images/sergio-tacchini.svg";
import BrandLogo2 from "../../assets/images/burberry.svg";
import BrandLogo3 from "../../assets/images/puma-logo.svg";
import BrandLogo4 from "../../assets/images/ralphlauren.svg";
import BrandLogo5 from "../../assets/images/fila-9.svg";
import BrandLogo6 from "../../assets/images/supreme-1.svg";
import { Link } from "react-router-dom";

const BrandHome = () => {
  return (
    <>
      <div className="main-brand">
        <div className="main-brand-header">
          <div className="main-brand-header-item">
            <h1>Our Brand !</h1>
          </div>
          <div className="main-brand-header-item ms-auto">
            <Link to="/brands">See All Brands</Link>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-4">
            <Link to="">
              <div className="card-brand">
                <img src={BrandLogo} className="card-img-top" alt="..." />
              </div>
            </Link>
          </div>

          <div className="col-4">
            <Link to="">
              <div className="card-brand">
                <img src={BrandLogo1} className="card-img-top" alt="..." />
              </div>
            </Link>
          </div>

          <div className="col-4">
            <Link to="">
              <div className="card-brand">
                <img src={BrandLogo2} className="card-img-top" alt="..." />
              </div>
            </Link>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-3">
            <Link to="">
              <div className="card-brand">
                <img src={BrandLogo3} className="card-img-top" alt="..." />
              </div>
            </Link>
          </div>

          <div className="col-3">
            <Link to="">
              <div className="card-brand">
                <img src={BrandLogo4} className="card-img-top" alt="..." />
              </div>
            </Link>
          </div>

          <div className="col-3">
            <Link to="">
              <div className="card-brand">
                <img src={BrandLogo5} className="card-img-top" alt="..." />
              </div>
            </Link>
          </div>

          <div className="col-3">
            <Link to="">
              <div className="card-brand">
                <img src={BrandLogo6} className="card-img-top" alt="..." />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandHome;
