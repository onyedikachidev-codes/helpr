import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import user1 from "@/public/my_image.jpg";

function AboutImage() {
  return (
    <div className="flex flex-row-reverse gap-20 items-center justify-center max-w-[80%] ">
      <Image
        src={user1}
        height={220}
        width={300}
        quality={80}
        alt="developer_image"
        className=" rounded-full mt-24 sm:mt-0 object-cover xl:h-[23rem] xl:w-[23rem] lg:h-[38rem] lg:w-[38rem] md:h-[28rem] md:w-[28rem] h-[20rem] w-[20rem]"
      />

      <div className="flex flex-col items-start xl:ml-9">
        <h2 className="text-2xl font-semibold mt-6 font-serif mx-auto ">
          Onyedikachi Nwanguma
        </h2>
        <h3 className=" text-xl text-gray-700 font-serif mx-auto">
          Frontend Engineer
        </h3>

        <div className="flex gap-1 mt-2 mb-10 mx-auto ">
          <Link
            href="https://www.linkedin.com/in/onyedikachi-nwanguma/"
            className="rounded-full cursor-pointer hover:bg-gray-300 h-12 w-12 border border-gray-500  flex items-center justify-center"
          >
            <FaLinkedin className="h-6 w-6 text-blue-700" />
          </Link>
          <Link
            href="https://github.com/onyedikachidev-codes"
            className="rounded-full cursor-pointer hover:bg-gray-300 h-12 w-12 border border-gray-500  flex items-center justify-center ml-2"
          >
            <FaGithub className="h-6 w-6 text-gray-700 " />
          </Link>
          <Link
            href="https://x.com/Mannie799"
            className="rounded-full cursor-pointer hover:bg-gray-300 h-12 w-12 border border-gray-500  flex items-center justify-center ml-2"
          >
            <FaXTwitter className="h-5 w-5 text-gray-700" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutImage;
