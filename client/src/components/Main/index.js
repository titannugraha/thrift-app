import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Landing, Register } from "../../pages";
const Main = () => {
  const [loginStatus, setLoginStatus] = useState(false);

  const loginCb = (result) => {
    setLoginStatus(result);
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, [loginStatus]);
  return (
    <>
      {loginStatus ? (
        <Landing loginStatus={loginStatus} loginCb={loginCb} />
      ) : (
        <Routes>
          <Route
            path=""
            element={<Login loginStatus={loginStatus} loginCb={loginCb} />}
          ></Route>
          <Route path="register" element={<Register />}></Route>
        </Routes>
      )}
    </>
  );
};

export default Main;
