import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { register } from "../../fetch/loginFetch";

const CardRegister = () => {
  const [User, setUser] = useState([
    {
      name: "",
      password: "",
    },
  ]);
  const navigation = useNavigate();

  const registerHandler = () => {
    Object.keys(User).length < 2
      ? Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please Input Data First !!",
        })
      : register(User)(navigation("/"));
  };
  return (
    <>
      <div className="container">
        <div className="row main-login">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="cards border-0 shadow rounded-3">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center fw-bold mb-5 fw-light fs-5">
                  Sign Up
                </h5>
                <div className="form-floating mb-3">
                  <input
                    onChange={(e) => setUser({ ...User, name: e.target.value })}
                    type="username"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Username</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={(e) =>
                      setUser({ ...User, password: e.target.value })
                    }
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <div className="d-grid my-3">
                  <button
                    onClick={() => registerHandler()}
                    className="btn text-uppercase fw-bold"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRegister;
