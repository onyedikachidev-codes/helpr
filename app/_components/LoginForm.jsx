"use client";

import Image from "next/image";
import love from "@/public/love.jpg";

import { IoArrowBackCircle } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="w-[20rem] ">
      <div className="w-full">
        <p className="mb-4 ml-[3%] mt-6 text-xl font-semibold -translate-y-[3.1rem] -translate-x-10">
          Login to your account
        </p>

        <form className="-translate-y-[2.5rem]">
          <div className=" mt-6 flex flex-col gap-4">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-1 block font-monts text-base"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-[100%] rounded-lg border border-blue-300 bg-blue-100 p-[0.625rem] text-base text-[#06080B] placeholder-gray-600 outline-none"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="password"
                className="mb-1 block font-monts text-base"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-[100%] rounded-lg border border-blue-300 bg-blue-100 p-[0.625rem] text-base placeholder-gray-600 outline-none"
                />
                <div
                  onClick={() => togglePasswordVisibility()}
                  className="absolute inset-y-0 right-2 flex cursor-pointer items-center text-gray-600"
                >
                  {isPasswordVisible ? (
                    <FaEyeSlash className="h-6 w-6" />
                  ) : (
                    <FaEye className="h-6 w-6" />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-4">
            <p className=" text-blue-600 text-lg">Forgot Password?</p>
          </div>

          <div className="mx-auto mt-12 flex w-[70%] flex-col items-center justify-center gap-3">
            <button
              type="submit"
              className="ml-[20%] mt-4 inline-block w-11/12 rounded bg-blue-600 py-3 text-center text-sm font-semibold uppercase text-stone-300 hover:bg-blue-500 sm:mr-10"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
