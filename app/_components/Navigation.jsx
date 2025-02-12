"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronRight, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

import bg from "@/public/logo.png";
import Button from "./Button";
import Logo from "./Logo";
import Login from "./Login";
import Signup from "./Signup";

const mons = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

function Navigation() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Add or remove overflow: hidden on the body
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = () => {
    window.location.href = "mailto:nwangumabimma@gmail.com";
  };

  return (
    <nav className="relative flex justify-between items-center md:px-10 px-5 max-w-full">
      <div className={`${mons.className}`}>
        <Link href="/" className="font-medium text-2xl">
          <Logo />
        </Link>
      </div>

      <div className="flex justify-between gap-24">
        <ul
          className={`${mons.className} md:flex hidden items-center gap-8 text-xl text-black`}
        >
          <li>
            <Link href="/explore" className="relative group">
              <span className="text-gray-800 hover:text-gray-500 transition duration-300">
                Explore
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link href="/about" className="relative group">
              <span className="text-gray-800 hover:text-gray-500 transition duration-300">
                About us
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="mailto:nwangumabimma@gmail.com"
              className="relative group"
            >
              <span className="text-gray-800 hover:text-gray-500 transition duration-300">
                Contact us
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        <div className={`${mons.className} flex gap-4`}>
          <div className="hidden lg:block py-[0.4rem] bg-gray-200 hover:bg-gray-300 px-7 rounded-md text-base border border-gray-600 text-gray-900">
            <Signup />
          </div>
          <div className="hidden lg:block py-[0.4rem] bg-gray-700 hover:bg-gray-600 px-7 rounded-md text-base border border-gray-300 text-gray-100">
            <Login />
          </div>
        </div>
      </div>

      <div className="md:hidden ">
        <button onClick={toggleMenu}>
          <GiHamburgerMenu
            className={`${
              isOpen ? "hidden" : "block"
            } h-6 w-6 text-blue-800 hover:text-blue-600`}
          />
          <FaTimes
            className={`${
              isOpen ? "block" : "hidden"
            } h-6 w-6 text-blue-800 hover:text-blue-600`}
          />
        </button>
      </div>

      <div
        className={`${
          isOpen
            ? "z-[10000] absolute top-[4.4rem] sm:top-[20dvh] z-100 min-h-screen w-full left-0 bg-gray-100 overflow-hidden"
            : "hidden"
        } md:hidden `}
      >
        <div className="uppercase w-full mt-6">
          <div
            onClick={() => {
              router.push("/explore");
              setIsOpen(false);
            }}
            className="flex items-center justify-between hover:bg-gray-200 py-3 px-2 mx-5 rounded-md text-lg font-medium w-[90%] border-b border-gray-700"
          >
            <Link href="/explore" onClick={() => setIsOpen(false)}>
              Explore
            </Link>
            <FaChevronRight className="text-lg text-[#06080B] lg:hidden" />
          </div>

          <div
            onClick={() => {
              router.push("/about");
              setIsOpen(false);
            }}
            className="flex items-center justify-between hover:bg-gray-200 py-3 px-2 mx-5 rounded-md text-lg font-medium w-[90%] border-b border-gray-700"
          >
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About us
            </Link>
            <FaChevronRight className="text-lg text-[#06080B] lg:hidden" />
          </div>

          <div
            onClick={() => {
              handleButtonClick();
              setIsOpen(false);
            }}
            className="flex items-center justify-between hover:bg-gray-200 py-3 px-2 mx-5 rounded-md text-lg font-medium w-[90%] "
          >
            <Link
              href="mailto:nwangumabimma@gmail.com"
              onClick={() => setIsOpen(false)}
            >
              Contact us
            </Link>
            <FaChevronRight className="text-lg text-[#06080B] lg:hidden" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
