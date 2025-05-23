"use client";

import AdditionalBanner from "../AdditionalBanner/AdditionalBanner";
import HeroContentBox from "../HeroContentBox/HeroContentBox";
import TariffsContentBox from "../TariffsContentBox/TariffsContentBox";

const MainContent = ({ setIsOpen }) => {
  return (
    <>
      <div className="container">
        <HeroContentBox setIsOpen={setIsOpen} />
        <TariffsContentBox setIsOpen={setIsOpen} />
      </div>
      <div
        className="mb-12 lg:hidden"
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
        <AdditionalBanner setIsOpen={setIsOpen} />
      </div>
      <div
        className="hidden lg:block lg:bg-no-repeat lg:bg-center lg:bg-cover mb-[59px]"
        style={{
          backgroundImage: "url('/banner-bg.png')",
          borderTop: `2px solid`,
          borderBottom: `2px solid`,
          borderImage: `linear-gradient(to right, #00e0ff, #a700ff, #ff2eb2) 1`,
          borderRadius: `8px`,
          height: `488px`,
        }}
      >
        <AdditionalBanner setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default MainContent;
