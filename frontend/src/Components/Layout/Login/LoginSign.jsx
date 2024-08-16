import React from "react";
import { ReactSVG } from "react-svg";
import Logo from "../../../assets/logo.svg";
import TextField from "../../ui/TextField";
import Button from "../../ui/Button";

const LoginSign = () => {
  return (
    <div className="w-1/3 h-full bg-[#f5f6fa] flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <ReactSVG src={Logo} />
        <div className="mt-4 text-4xl text-[#7E22CE] font-extralight tracking-widest text-center">
          Welcome to <br />
          <div className="font-bold"> Ques.AI</div>
        </div>
      </div>
      <div className="w-[70%] mt-8">
        <TextField placeholder={"Email Address"} />
        <TextField placeholder={"Password"} />
        <div className="flex justify-between mt-6 text-sm text-gray-600">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-blue-500">
            Forgot password?
          </a>
        </div>

        <Button className={"w-full"}>Login</Button>

        <div className="flex items-center justify-center mt-6">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500">or</span>
          <hr className="w-full border-gray-300" />
        </div>

        <button className="w-full py-3 mt-6 border border-gray-300 rounded-lg flex items-center justify-center bg-white hover:bg-gray-100">
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google Logo"
            className="w-6 h-6 mr-2"
          />
          Continue with Google
        </button>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500">
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginSign;