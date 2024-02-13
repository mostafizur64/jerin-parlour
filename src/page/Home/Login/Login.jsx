import React from "react";
import Container from "../../../components/Container";
import logo from "../../../assets/image/logo/logo.png";
import { FaGoogle } from "react-icons/fa6";
import login from "../../../assets/image/Login/google.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 md:mt-56 mt-32">
          <div className="">
            <img src={logo} alt="logo" />
          </div>
          <div>
            <h2 className="text-headingColor text-xl font-bold">Login With </h2>
          </div>
          <div className=" relative">
            <button
              type="submit"
              className="bg-white border border-slate-200 rounded-full  py-2 px-4 md:w-[457px] w-[300px] "
            >
              Continue with Google
            </button>
            <div className="w-[31px] h-[31px] absolute top-[5px] left-3">
              <img src={login} alt="login" />
            </div>
          </div>
          <div>
            <h3>
              Don't have an account?
              <Link to="/registration" className="text-textColor">Create an account</Link>
            </h3>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
