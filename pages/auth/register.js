import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

const Register = () => {



  return (
    <div className="flex h-screen bg-slate-300 shadow">
      <div className="h-3/4 w-3/4 relative rounded-md  m-auto grid lg:grid-cols-2">
        <div className="h-[80%] w-[50%] top-10 left-8 overflow-hidden absolute z-10">
          <img
            src="https://mcdn.wallpapersafari.com/335/79/80/D3tdLH.jpg"
            alt="loginbg"
            className="h-full w-full rounded-md"
          />
        </div>

        <div className="bg-green-200 w-full h-full z-0 ml-[38vw] flex rounded">
          <form className="m-auto">
            <h4 className="text-lg font-semibold text-center my-3">
              Register Form
            </h4>
            <div className="flex flex-col gap-3">
              <input
                className="rounded px-10 py-2 transition-all border-none focus:outline-none hover:scale-110"
                type="text"
                name="username"
                placeholder="Enter Username"
              />

              <input
                className="rounded px-10 py-2 transition-all border-none focus:outline-none hover:scale-110"
                type="password"
                name="password"
                placeholder="Enter Password"
                          />
                          
              <input
                className="rounded px-10 py-2 transition-all border-none focus:outline-none hover:scale-110"
                type="email"
                name="email"
                placeholder="Enter email address"
                          />
                          
              <input
                className="rounded px-10 py-2 transition-all border-none focus:outline-none hover:scale-110"
                type="number"
                name="number"
                placeholder="Enter Mobile Number"
              />

              <button className="px-10 py-2 bg-yellow-200 transition-all border-none hover:scale-110">
                Register
              </button>
            </div>
            
            <p className="text-sm font-semibold mt-5">
              Already User ?{" "}
              <Link href="/auth/login/" className="ml-2 text-blue-700 transition-all border-none hover:scale-110">
                Login User
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
