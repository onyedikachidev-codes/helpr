import Image from "next/image";
import Progress from "./Progress";

import support from "@/public/couples.jpg";

function Fundraisers() {
  return (
    <div className="mb-5 ml-[5%] flex w-[90%] cursor-pointer gap-6 rounded-3xl hover:bg-[#e4f1ff]">
      <div>
        <Image
          src={support}
          alt="fundraiser"
          height={80}
          width={80}
          className="h-28 w-28 rounded-2xl"
        />
      </div>
      <div className="w-[68%]">
        <p className="font mt-1 font-light text-[#06080B]">1.3k donations</p>
        <h3 className="mt-1 font-semibold text-[#252525]">
          Help John pay his rent
        </h3>
        <div className="mt-3">
          <Progress />
          <p className="mt-1 font-semibold text-[#252525]">$30,000 raised</p>
        </div>
      </div>
    </div>
  );
}

export default Fundraisers;
