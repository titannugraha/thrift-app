import axios from "axios";
import Swal from "sweetalert2";
const URL = "http://localhost:3000";

const loginAuth = async (obj, cb) => {
  try {
    let result = await axios({
      method: "POST",
      url: `${URL}/users/login`,
      data: obj,
    });
    const acces_token = result.data.acces_token;
    localStorage.setItem("access_token", acces_token);
    cb(true);
    Swal.fire({
      icon: "success",
      title: "Login Success",
      text: `Welcome Back`,
    });
  } catch (err) {
    console.log(err);
    Swal.fire({
      icon: "error",
      title: "Login Failed !",
      text: "Please input Username and Password !",
    });
  }
};

const register = async (obj) => {
  try {
    let result = await axios({
      method: "POST",
      url: `${URL}/users/create`,
      data: obj,
    });
    Swal.fire({
      icon: "success",
      title: "Register Success",
      text: `You can Login!`,
    });
    obj(result.data);
  } catch (err) {
    console.log(err);
  }
};

const userGet = async (cb) => {
  try {
    const acces_token = localStorage.getItem("access_token");
    let result = await axios({
      method: "GET",
      url: `${URL}/users/get/`,
      headers: { acces_token },
    });
    cb(result.data);
  } catch (err) {
    console.log(err);
  }
};

export { loginAuth, register, userGet };
