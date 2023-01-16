import React from "react";
import { Link } from "react-router-dom";
import { Catalogue } from "../../../components";

const List = () => {
  return (
    <>
      <div className="main-item-header">
        <div className="main-item-header-item">
        <h1>All Product's</h1>
        </div>
        <div className="main-item-header-item ms-auto">
          <Link to="/items/create">+Add Product</Link>
        </div>
      </div>
      <Catalogue />
    </>
  );
};

export default List;
