import { NextPage } from "next";
import router from "next/router";
import { useEffect } from "react";
import LoginForm from "../components/login/LoginForm";
import Cookies from "js-cookie";

const Login:NextPage = () => {

  useEffect(() => {
    if(Cookies && Cookies.get("token")) router.push("/product");
  }, [])
  

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;