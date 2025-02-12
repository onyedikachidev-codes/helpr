import Image from "next/image";
import Progress from "./Progress";

import support from "@/public/couples.jpg";

function Fundraisers({ children, donations, title, val, amount }) {
  return (
    <div className="mb-5 ml-[5%] flex w-[90%] cursor-pointer gap-6 rounded-3xl hover:bg-[#e4f1ff]">
      <div>{children}</div>
      <div className="w-[68%]">
        <p className="font mt-1 font-light text-[#06080B]">
          {donations}K donations
        </p>
        <h3 className="mt-1 font-semibold text-[#252525]">{title}</h3>
        <div className="mt-3 ">
          <Progress val={val} />
          <p className="mt-1 font-semibold text-[#252525]">${amount} raised</p>
        </div>
      </div>
    </div>
  );
}

export default Fundraisers;
