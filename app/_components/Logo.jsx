import Image from "next/image";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <div className="flex items-center cursor-pointer">
      <Image
        src={logo}
        alt="helpr_logo"
        quality={90}
        height={45}
        width={45}
        className="ml-[0.83rem]"
      />
      <h2 className="pl-2 pt-[.3rem] text-[1.5rem] text-blue-600 font-serif">
        Helpr
      </h2>
    </div>
  );
}

export default Logo;
