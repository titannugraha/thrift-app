import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginAuth } from "../../fetch/loginFetch";

const CardLogin = (props) => {
  const [User, setUser] = useState([
    {
      name: "",
      password: "",
    },
  ]);
  const { loginCb } = props;

  const loginHandler = () => {
    loginAuth(User, loginCb);
  };

  return (
    <>
      <div className="container">
        <div className="row main-login">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="cards border-0 shadow rounded-3">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center fw-bold mb-5 fw-light fs-5">
                  Sign In
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

                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="rememberPasswordCheck"
                  />
                  <label
                    className="form-check-label"
                    for="rememberPasswordCheck"
                  >
                    Remember password
                  </label>
                </div>
                <div className="d-grid">
                  <button
                    onClick={() => loginHandler()}
                    className="btn text-uppercase fw-bold"
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
                <div className="my-4 text-center signup-grid">
                  <h6>Don't Have a Account?</h6>
                  <Link to={'/register'}>Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardLogin;
