"use client";

import Image from "next/image";
import arrowB from "../../../../public/arrow-b.svg";

const LangSelect = () => {
  return (
    <div className="flex justify-center items-center gap-[9px] cursor-pointer">
      <p className="font-raleway font-bold text-sm text-[#fff] lg:text-base">
        RU
      </p>
      <Image
        src={arrowB}
        alt="select icon"
        width={13}
        height={8}
        className="lg:w-3.5 h-[9px]"
      />
    </div>
  );
};

export default LangSelect;
