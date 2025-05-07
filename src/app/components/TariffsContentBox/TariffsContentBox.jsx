"use client";

import TarifAdvanced from "../TarifAdvanced/TarifAdvanced";
import TarifBasic from "../TarifBasic/TarifBasic";
import TarifExpert from "../TarifExpert/TarifExpert";

const TariffsContentBox = () => {
  return (
    <div className="mb-[76px]">
      <h2 className="font-raleway font-bold text-2xl text-[#fff] uppercase mb-7 text-center">
        Тарифы
      </h2>
      <TarifBasic />
      <TarifAdvanced />
      <TarifExpert />
    </div>
  );
};

export default TariffsContentBox;
