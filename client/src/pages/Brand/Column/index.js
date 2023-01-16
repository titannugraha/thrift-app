import React from "react";
import { Link } from "react-router-dom";
import { ListBrand } from "../../../components";

const Column = () => {
  return (
    <>
      <div className="main-brand-header">
        <div className="main-brand-header-item">
          <h1>All Product' Brand's</h1>
        </div>
        <div className="main-brand-header-item ms-auto">
          <Link to="/brands/create">+Add Product Brand's</Link>
        </div>
      </div>
      <ListBrand />
    </>
  );
};

export default Column;
