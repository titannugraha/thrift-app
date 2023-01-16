import React, { useState } from "react";
import { Content, Footer, Navbar } from "../../components";

const Landing = (props) => {
  const { loginStatus, loginCb } = props;

  return (
    <>
      <Navbar loginStatus={loginStatus} loginCb={loginCb} />
      <Content />
      <Footer />
    </>
  );
};

export default Landing;
