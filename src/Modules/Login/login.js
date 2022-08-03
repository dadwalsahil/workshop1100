import React, { useState } from "react";
import { history } from "../../managers/history";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className=" pt-7  ">
        <div className="w-125 h-135.5 bg-white text-center m-auto rounded-lg px-5  mb-41.75">
          <div className="w-full mt-5 flex flex-col justify-center ">
            <div className="text-ft20 font-OpenSansSemiBold mt-7.75 text-white">
              Login with nft ticketing
            </div>
            <img
              src="/images/ticketyn-logo.svg"
              alt=""
              className="px-5 w m-auto mt-7.75"
            />
            <h1 className="text-ft20 font-OpenSansSemiBold mt-7.75 text-black-25">
              Login with nft ticketing
            </h1>
          </div>
          <div className=" w-full mt-10 rounded-lg flex justify-between">
            <input
              type="email"
              placeholder="Email Address"
              className=" py-5 pl-5  w-full h-2 rounded-lg  bg-grey-100 placeholder-grey-50 text-darkblack-50 font-OpenSansRegular focus:outline-none"
            />
          </div>
          <div className="w-full mt-4 rounded-lg flex justify-between items-center">
            <input
              placeholder="Password"
              className="py-5 pl-5  w-full h-2 rounded-lg  bg-grey-100 placeholder-grey-50 text-darkblack-50 font-OpenSansRegular focus:outline-none"
            />
          </div>
          <div className="flex justify-between flex-row pt-7.5 mt-8">
            <div className=" flex">
              <input type="checkbox" className="w-5 h-5 " value="" />
              <p className="font-OpenSansRegular text-ft4 text-darkGrey-100 pl-2.5 ">
                Remember me
              </p>
            </div>
            <p className="font-OpenSansRegular text-ft4 text-darkGrey-100 "></p>
          </div>
          <Link
            to="/dashBoard"
            type="submit"
            className="bg-grey-150 hover:bg-primary-50 py-6 text-ft4 mt-4 text-white w-full rounded-full h-5 font-OpenSansSemiBold mb-8"
          >
            <div className="-mt-2.5">Sign in</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
