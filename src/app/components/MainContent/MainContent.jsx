"use client";

import AdditionalBanner from "../AdditionalBanner/AdditionalBanner";
import HeroContentBox from "../HeroContentBox/HeroContentBox";
import HeroImg from "../HeroImg/HeroImg";
import TariffsContentBox from "../TariffsContentBox/TariffsContentBox";

const MainContent = () => {
  return (
    <>
      <div className="container">
        <HeroContentBox />
        <TariffsContentBox />
      </div>
      <div
        className="mb-12"
        style={{
          background: `radial-gradient(circle at top left, rgba(100, 100, 255, 0.25), transparent 50%),
              radial-gradient(circle at bottom right, rgba(100, 200, 255, 0.2), transparent 50%),
              #0a0016`,
          borderTop: `2px solid`,
          borderBottom: `2px solid`,
          borderImage: `linear-gradient(to right, #00e0ff, #a700ff, #ff2eb2) 1`,
          borderRadius: `8px`,
        }}
      >
        <AdditionalBanner />
      </div>
    </>
  );
};

export default MainContent;
