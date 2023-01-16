import React, { useState, useEffect } from "react";
import "./style.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { getBrand, removeBrand } from "../../fetch/brandFetch";
import { useNavigate } from "react-router-dom";

const ListBrand = () => {
  const [brands, setBrand] = useState([]);
  const URL = "http://localhost:3000/";

  useEffect(() => {
    getBrand((result) => {
      setBrand(result);
    });
  }, []);

  const navigation = useNavigate();

  const deleteHandler = (id) => {
    removeBrand(id);
    navigation("/brands");
  };

  return (
    <>
      <div className="row my-5">
        {brands.map((brand) => {
          return (
            <div className="col-3 mb-3">
              <div className="card-item ">
                <img src={URL + brand.image} className="card-img-top" alt="..." />
                <div className="card-body ms-2 my-3">
                  <h4 className="card-title">{brand.name}</h4>
                  <DropdownButton id="dropdown-basic-button" title="Action">
                    <Dropdown.Item
                      href={`brands/edit/${brand.id}`}
                      id="dropdown-basic-item"
                    >
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        deleteHandler(brand.id);
                      }}
                      id="dropdown-basic-item"
                      to="brands/delete/id"
                    >
                      Delete
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListBrand;
