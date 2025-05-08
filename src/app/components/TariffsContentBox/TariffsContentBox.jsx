"use client";

import TarifAdvanced from "../TarifAdvanced/TarifAdvanced";
import TarifBasic from "../TarifBasic/TarifBasic";
import TarifExpert from "../TarifExpert/TarifExpert";

const TariffsContentBox = ({ setIsOpen }) => {
  return (
    <div className="mb-[76px] lg:mb-[201px]">
      <h2 className="font-raleway font-bold text-2xl text-[#fff] uppercase mb-7 text-center lg:text-5xl lg:mb-[79px]">
        Тарифы
      </h2>
      <div className="lg:flex lg:gap-5">
        <TarifBasic setIsOpen={setIsOpen} />
        <TarifAdvanced setIsOpen={setIsOpen} />
        <TarifExpert setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default TariffsContentBox;
