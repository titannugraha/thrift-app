import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { createBrand } from "../../fetch/brandFetch";

const Entry = () => {
  const [image, setImage] = useState("");
  const [formBrand, setFormBrand] = useState([
    {
      name: "",
      address: "",
    },
  ]);
  const navigation = useNavigate();

  const submitFormData = () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", formBrand.name);
    formData.append("address", formBrand.address);

    createBrand(formData);
    navigation('/brands')
  };

  return (
    <>
      <div className="row my-5">
        <form
          onSubmit={() => submitFormData()}
          className="col-6"
          method="POST"
          encType="multipart/form-data">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <h5>Brand's Name</h5>
            </label>
            <input
              onChange={(e) =>
                setFormBrand({ ...formBrand, name: e.target.value })
              }
              name="name"
              type="name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Brand's Name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <h5>Brand Address</h5>
            </label>
            <textarea
              onChange={(e) =>
                setFormBrand({ ...formBrand, address: e.target.value })
              }
              name="address"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Fabrique Brand Address"
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <h5>Image Brand</h5>
            </label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              name="image"
              className="form-control"
              type="file"
              id="formFile"
            ></input>
          </div>

          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Entry;
