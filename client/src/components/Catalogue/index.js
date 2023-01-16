import React, { useEffect, useState } from "react";
import "./style.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { get, remove } from "../../fetch/itemFetch";

import { useNavigate } from "react-router-dom";

const Catalogue = () => {
  const [items, setitems] = useState([]);
  const URL = "http://localhost:3000/";
  const navigate = useNavigate();

  useEffect(() => {
    get((result) => {
      setitems(result);
    });
  }, []);

  const refreshPage = () => {
    navigate(0);
  };
  
  const deleteHandler = (id) => {
    remove(id);
  };
  return (
    <>
      <div className="row my-5">
        {items.map((item, i) => {
          return (
            <div className="col-3 mb-3">
              <div className="card-item ">
                <img
                  src={URL + item.image}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body ms-2 my-3">
                  <h4 className="card-title">{item.name}</h4>
                  <small className="card-text">Rp. {item.price} </small>
                  <div className="card-footer">
                    <small>By : {item.User.name}</small>{" "}
                  </div>
                  <DropdownButton id="dropdown-basic-button" title="Action">
                    <Dropdown.Item
                      href={`items/edit/${item.id}`}
                      id="dropdown-basic-item"
                    >
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        deleteHandler(item.id);
                      }}
                      id="dropdown-basic-item"
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

export default Catalogue;
