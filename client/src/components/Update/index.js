import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBrand } from "../../fetch/brandFetch";
import { detail, editItem } from "../../fetch/itemFetch";
import "./style.css";

const Update = () => {
  const [brand, setBrand] = useState([]);
  const [formItem, setFormItem] = useState([
    {
      name: "",
      category: "",
      size: "",
      price: 0,
      image: "",
      brandId: 0,
      userId: 0,
      brandName: "",
    },
  ]);

  const params = useParams();

  useEffect(() => {
    const { id } = params;
    getBrand((result) => {
      setBrand(result);
    });

    detail(+id, (result) => {
      setFormItem({
        name: result.name,
        category: result.category,
        size: result.size,
        price: result.price,
        image: result.image,
        brandId: result.brandId,
        userId: result.userId,
        brandName: result.Brand.name,
      });
    });
    console.log(formItem);
  }, []);

  const Navigation = useNavigate();

  const submitForm = () => {
    const formData = new FormData();
    formData.append("image", formItem.image);
    formData.append("name", formItem.name);
    formData.append("category", formItem.category);
    formData.append("size", formItem.size);
    formData.append("price", formItem.price);
    formData.append("brandId", formItem.brandId);

    editItem(+params.id, formData);
    Navigation("/items");
  };
  return (
    <>
      <div className="row my-5">
        <form
          onSubmit={() => submitForm()}
          method="PUT"
          encType="multipart/form-data"
          className="col-6"
        >
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <h5>Product's Name</h5>
            </label>
            <input
              onChange={(e) =>
                setFormItem({ ...formItem, name: e.target.value })
              }
              value={formItem.name}
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
              <option selected>{formItem.category}</option>
              <option value="Jacket">Jacket</option>
              <option value="Shirt">Shirt</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              <h5>Brand Product's</h5>
            </label>
            <select
              value={formItem.brandName}
              onChange={(e) =>
                setFormItem({ ...formItem, brandId: e.target.value })
              }
              className="form-select"
            >
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
              value={formItem.size}
            >
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
              value={formItem.price}
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
              name="image"
              onChange={(e) =>
                setFormItem({ ...formItem, image: e.target.files[0] })
              }
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

export default Update;
