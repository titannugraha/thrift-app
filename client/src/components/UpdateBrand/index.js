import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { detailBrand, editBrand } from "../../fetch/brandFetch";
import "./style.css";

const UpdateBrand = () => {
  const [formBrand, setFormBrand] = useState([
    {
      name: "",
      address: "",
      image: "",
    },
  ]);

  const params = useParams();

  useEffect(() => {
    const { id } = params;

    detailBrand(+id, (result) => {
      // console.log(result);
      setFormBrand({
        name: result.name,
        address: result.address,
        image: result.image,
      });
    });
    console.log(formBrand);
  }, []);
  const Navigation = useNavigate();

  const submitForm = () => {
    const formData = new FormData();
    formData.append("image", formBrand.image);
    formData.append("name", formBrand.name);
    formData.append("address", formBrand.address);

    editBrand(+params.id, formData);
    // console.log(formData)
    Navigation("/brands");
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
              <h5>Brand's Name</h5>
            </label>
            <input
              onChange={(e) =>
                setFormBrand({ ...formBrand, name: e.target.value })
              }
              value={formBrand.name}
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
              value={formBrand.address}
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
              onChange={(e) =>
                setFormBrand({ ...formBrand, image: e.target.files[0] })
              }
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

export default UpdateBrand;
