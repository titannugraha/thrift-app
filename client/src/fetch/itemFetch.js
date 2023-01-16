import axios from "axios";
import Swal from "sweetalert2";
const URL = "http://localhost:3000";


const get = async (cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: `${URL}/items`,
    });
    cb(result.data);
  } catch (err) {
    console.log(err);
  }
};

const create = async (obj) => {
  try {
    const acces_token = localStorage.getItem("access_token");
    let result = await axios({
      method: "POST",
      url: `${URL}/items/create`,
      data: obj,
      headers: { acces_token },
    });
    obj(result.data);
  } catch (err) {
    console.log(err);
  }
};

const remove = async (id) => {
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
          url: `${URL}/items/delete/${id}`,
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

const editItem = async (id, obj) => {
  try {
    let result = await axios({
      method: "PUT",
      url: `${URL}/items/edit/${id}`,
      data: obj,
    });
    console.log(result.data);
    Swal.fire("Edit Item", "Your Data has been Updated!", "success");
  } catch (err) {
    console.log(err);
  }
};

const detail = async (id, cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: `${URL}/items/details/${id}`,
    });
    cb(result.data);
  } catch (err) {
    console.log(err);
  }
};
export { get, create, remove, detail, editItem };
