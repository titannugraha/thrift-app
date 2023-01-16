import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000";

const getBrand = async (cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: `${URL}/brands`,
    });
    cb(result.data);
  } catch (err) {
    console.log(err);
  }
};

const createBrand = async (obj) => {
  try {
    let result = await axios({
      method: "POST",
      url: `${URL}/brands/create`,
      data: obj,
    });
    
   console.log(result.data)
  } catch (err) {
    console.log(err);
  }
};

const removeBrand = async (id) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let result = await axios({
          method: "DELETE",
          url: `${URL}/brands/delete/${id}`,
        });
        Swal.fire(
          "Deleted!",
          `Your result with id ${id} has been deleted.`,
          "success"
        );
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const editBrand = async (id, obj) => {
  try {
    let result = await axios({
      method: "PUT",
      url: `${URL}/brands/edit/${id}`,
      data: obj,
    });
    console.log(result.data);
    Swal.fire("Edit Brand", "Your Data has been Updated!", "success");
  } catch (err) {
    console.log(err);
  }
};

const detailBrand = async (id, cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: `${URL}/brands/details/${id}`,
    });
    cb(result.data);
  } catch (err) {
    console.log(err);
  }
};
export { getBrand, createBrand,removeBrand,editBrand, detailBrand };
