import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import Swal from "sweetalert2";
import { userGet } from "../../fetch/loginFetch";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = (props) => {
  const [User, setUser] = useState([]);

  useEffect(() => {
    userGet((result) => {
      setUser(result);
    });
  }, []);

  const { loginCb } = props;
  const navigation = useNavigate();

  const logoutHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to sign out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sign Out !",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Sign Out!", "Sign Out Succes !.", "success");
        loginCb(false);
        localStorage.clear();
        navigation("/");
      }
    });
  };
  return (
    <>
      <div className="main-navbar fixed-top">
        <div className="navbar-content">
          <div className="navbar-item">
            <Link to="/" className="navbar-logo">
              Thrift <strong>House</strong>
            </Link>
          </div>
          <div className="navbar-item">
            <ul className="navbar-ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/items">Products</Link>
              </li>
              <li>
                <Link to="#">Galery</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-item ms-auto">
            <div className="navbar-login ms-auto ">
              <DropdownButton
                id="dropdown-button"
                title={`Welcome back, ${User.name}`}
              >
                <Dropdown.Item
                  id="dropdown-item"
                  onClick={() => logoutHandler()}
                >
                  Sign Out
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
