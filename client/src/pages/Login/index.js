import React from "react";
import { CardLogin } from "../../components";

const Login = (props) => {
  const { loginCb } = props;
  return (
    <>
      <CardLogin loginCb={loginCb} />
    </>
  );
};

export default Login;
