import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { SlSocialGoogle } from "react-icons/sl";

import Logo from "./Logo";

function Footer() {
  return (
    <div className="mt-8 divide-y divide-slate-400 bg-gray-200">
      <div className="mx-auto mt-12 flex max-w-[94%] flex-col gap-3 border-t border-stone-400 pb-4 pt-4 lg:hidden">
        <div className="mx-auto">
          <Logo />
        </div>
        <div className="mx-auto mb-4 flex gap-6 text-[#252525]">
          <FaInstagram className="cursor-pointer text-[2rem]" />
          <RiTwitterXFill className="cursor-pointer text-[2rem]" />
          <SlSocialGoogle className="cursor-pointer text-[2rem]" />
          <FaFacebook className="cursor-pointer text-[2rem]" />
          <FaLinkedin className="cursor-pointer text-[2rem]" />
        </div>
        <div className="mx-auto flex items-center justify-between pb-7 text-[#252525]">
          <p>Copyright &copy;2024 Helpr | Privacy | Security</p>
        </div>
      </div>

      <footer className="hidden p-8 text-gray-700 lg:block">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Social Icons */}
          <div>
            <div className="-translate-x-3">
              <Logo />
            </div>
            <div className="flex space-x-3 text-gray-500">
              <RiTwitterXFill className="h-6 w-6 cursor-pointer hover:text-gray-700" />
              <FaLinkedin className="h-6 w-6 cursor-pointer hover:text-gray-700" />
              <FaFacebook className="h-6 w-6 cursor-pointer hover:text-gray-700" />
              <FaInstagram className="h-6 w-6 cursor-pointer hover:text-gray-700" />
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Product</h3>
            <ul className="mt-4 space-y-2">
              <li>Overview</li>
              <li>Features</li>
              <li>
                Solutions{" "}
                <span className="ml-1 inline-block rounded-full bg-gray-200 px-2 py-0.5 text-xs">
                  New
                </span>
              </li>
              <li>Pricing</li>
              <li>Releases</li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>About us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>News</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>Blog</li>
              <li>Newsletter</li>
              <li>Events</li>
              <li>Help centre</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="mt-8 flex text-right text-sm text-gray-500">
          © 2024 Helpr. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
