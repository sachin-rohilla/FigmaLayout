import React, { useContext } from "react";
import { Context } from "./Context";
import'./Login.css'
const Login = () => {
  const { setName } = useContext(Context);
  const namehandler = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h1>Login</h1>
      <input type="text" placeholder="enter your name" onChange={namehandler} />
    </>
  );
};

export default Login;
