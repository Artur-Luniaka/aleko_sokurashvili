"use client";

import HeroBtn from "../HeroBtn/HeroBtn";
import HeroImg from "../HeroImg/HeroImg";
import HeroMainText from "../HeroMainText/HeroMainText";

const HeroContentBox = () => {
  return (
    <div className="mb-[132px] relative">
      <HeroImg />
      <HeroMainText />
      <HeroBtn />
    </div>
  );
};

export default HeroContentBox;
