import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { create } from "../../fetch/itemFetch";
import Swal from "sweetalert2";
import { getBrand } from "../../fetch/brandFetch";

const Create = () => {
  const [brand, setBrand] = useState([]);
  const [image, setImage] = useState("");
  const [formItem, setFormItem] = useState([
    {
      name: "",
      category: "",
      size: "",
      price: 0,
      brandId: 0,
    },
  ]);

  useEffect(() => {
    getBrand((result) => {
      setBrand(result);
    });
  }, []);

  const navigation = useNavigate();

  const submitForm = () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", formItem.name);
    formData.append("category", formItem.category);
    formData.append("size", formItem.size);
    formData.append("price", formItem.price);
    formData.append("brandId", formItem.brandId);

    create(formData);
    navigation("/items");
  };

  return (
    <>
      <div className="row my-5">
        <form
          onSubmit={() => submitForm()}
          className="col-6"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <h5>Product's Name</h5>
            </label>
            <input
              onChange={(e) =>
                setFormItem({ ...formItem, name: e.target.value })
              }
              type="name"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Product's Name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <h5>Category</h5>
            </label>
            <select
              onChange={(e) =>
                setFormItem({ ...formItem, category: e.target.value })
              }
              className="form-select"
            >
              <option selected>Select Category</option>
              <option value="Jacket">Jacket</option>
              <option value="Jacket">Shirt</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <h5>Brand Product's</h5>
            </label>
            <select
              onChange={(e) =>
                setFormItem({ ...formItem, brandId: e.target.value })
              }
              className="form-select"
            >
              <option selected>Select Brand</option>
              {brand.map((item) => {
                return <option value={item.id}>{item.name}</option>;
              })}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <h5>Size Product's</h5>
            </label>
            <select
              onChange={(e) =>
                setFormItem({ ...formItem, size: e.target.value })
              }
              className="form-select"
            >
              <option selected>Select Size</option>
              <option value="S">S</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <h5>Price Product</h5>
            </label>
            <input
              onChange={(e) =>
                setFormItem({ ...formItem, price: e.target.value })
              }
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Product's Price"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <h5>Image Product</h5>
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

export default Create;
