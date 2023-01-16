import React from "react";
import { Outlet } from "react-router-dom";
// import '../../components/Catalogue/style.css'

const Item = () => {
  return (
    <div className="main-item-body">
      <div className="main-item-card">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Item;
