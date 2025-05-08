"use client";

import HeroBtn from "../HeroBtn/HeroBtn";
import HeroImg from "../HeroImg/HeroImg";
import HeroMainText from "../HeroMainText/HeroMainText";

const HeroContentBox = ({ setIsOpen }) => {
  return (
    <div className="mb-[132px] lg:mb-[200px] relative">
      <div className="lg:flex lg:gap-10 lg:mb-[42px]">
        <HeroImg />
        <HeroMainText />
      </div>
      <HeroBtn setIsOpen={setIsOpen} />
    </div>
  );
};

export default HeroContentBox;
