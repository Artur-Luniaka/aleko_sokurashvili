"use client";

import HeroContentBox from "../HeroContentBox/HeroContentBox";
import HeroImg from "../HeroImg/HeroImg";
import TariffsContentBox from "../TariffsContentBox/TariffsContentBox";

const MainContent = () => {
  return (
    <div className="container">
      <HeroContentBox />
      <TariffsContentBox />
    </div>
  );
};

export default MainContent;
