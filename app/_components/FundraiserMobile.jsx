import Image from "next/image";
import Button from "./Button";
import Progress from "./Progress";

import img from "@/public/cancer.jpg";

function FundraiserMobile({
  children,
  headline,
  storySection,
  donation,
  amount,
  value,
}) {
  return (
    <div className="mb-6 flex w-[90%] cursor-pointer flex-col rounded-3xl pt-3 lg:flex-row">
      <div className="ml-[5%] flex w-[100%] flex-col rounded-lg border border-gray-300 p-4 shadow-lg">
        {/* Image Container */}
        <div className="relative">
          {children}
          {/* Donations Counter */}
          <div className="absolute bottom-2 left-2 rounded-full bg-gray-800 bg-opacity-75 px-2 py-1 text-sm text-white">
            {donation}K donations
          </div>
        </div>

        {/* Caption */}
        <p className="mt-4 text-lg font-semibold text-gray-800">{headline}</p>

        <p className="mt-2 text-slate-500">{storySection}</p>

        <div className="mt-8">
          <Progress val={value} />
          <p className="mt-2 text-lg font-semibold text-black">
            ${amount} raised
          </p>
        </div>
        <div className="mx-auto mt-3 min-h-32 max-w-[90%]">
          <Button type="squareFund">Donate to Fundraiser</Button>
          <Button type="squareWhiteFund">Share Fundraiser</Button>
        </div>
      </div>
    </div>
  );
}

export default FundraiserMobile;
