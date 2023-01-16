import React from "react";
import { About, Banner, BrandHome, Product } from "../../components";

const Home = () => {
  return (
    <>
      <div className="main-banner">
        <Banner />
      </div>
      <div className="main-body">
        <div className="main-card" id="cardId">
          <Product />
          <BrandHome/>
          <About />
        </div>
      </div>

    </>
  );
};

export default Home;
