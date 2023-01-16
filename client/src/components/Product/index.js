import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Product = () => {
  return (
    <div id="product">
      <div className="main-product">
        <div className="header-product">
          <div className="header-product-item">
            <h1>What's Hot !</h1>
          </div>
          <div className="header-product-item ms-auto">
            <Link to="/items">See All Products</Link>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-3">
            <div className="card-product">
              <img
                src="https://cf.shopee.co.id/file/5bde3a87ce3bd45077662896f120fd7c"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body  ms-2 my-3">
                <h4 className="card-title">Jacket Sergio Tachini</h4>
                <small className="card-text">Rp. 450000</small>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card-product">
              <img
                src="https://images.tokopedia.net/img/cache/500-square/product-1/2018/12/25/46325824/46325824_c40994b9-c6f8-4d6c-abe3-e191b17d8666_700_700.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body  ms-2 my-3">
                <h4 className="card-title">Supreme Shirt White</h4>
                <small className="card-text">Rp. 800000</small>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card-product">
              <img
                src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c5fd6fee145245d9810aae61012808fa_9366/essentials-down-jacket.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body  ms-2 my-3">
                <h4 className="card-title">Jacket Coats Adidas</h4>
                <small className="card-text">Rp. 600000</small>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card-product">
              <img
                src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/4/15/e8dfce90-239f-4c2e-8a5c-899fa9406bbf.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body  ms-2 my-3">
                <h4 className="card-title">Jacket Burberry</h4>
                <small className="card-text">Rp. 1500000</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
