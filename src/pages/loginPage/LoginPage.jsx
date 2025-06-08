import React, { useEffect } from "react";
import s from "./LoginPage.module.css"
import cn from "classnames";
import Login from "../../components/login/Login";

const LoginPage = () => {
  return (
    <div className={s.login_container}>
      <h2 className={s.login_title}>Working with POST request</h2>
      <Login />
    </div>
  );
};

export default LoginPage;
