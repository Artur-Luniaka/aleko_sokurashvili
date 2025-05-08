"use client";

import { motion } from "framer-motion";

const TarifBasic = ({ setIsOpen }) => {
  return (
    <motion.div
      className="flex flex-col w-[313px] p-8 rounded-[28px] mb-[47px] lg:w-[360px] lg:mb-0 lg:px-9 lg:pt-9 lg:pb-[26px]"
      style={{
        background: `
      radial-gradient(circle at 30% 40%, rgba(255,255,255,0.05), transparent 40%),
      radial-gradient(circle at 70% 80%, rgba(0,255,255,0.07), transparent 60%),
      linear-gradient(180deg, #0D0C1D 0%, #1E1B3A 50%, #2C2A4A 100%)
    `,
        boxShadow: `inset 4px 6px 10px 4px rgba(167, 93, 243, 0.2)`,
      }}
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h3 className="font-raleway font-semibold text-base text-[#fff] uppercase mb-[18px] lg:text-xl">
        Базовый
      </h3>
      <span className="flex items-end gap-[22px] mb-[29px]">
        <p className="font-manrope font-bold text-[64px] uppercase text-[#fff] lg:text-[74px]">
          99 $
        </p>
        <p className="font-manrope font-bold text-xl uppercase text-[#fff] line-through">
          139$
        </p>
      </span>
      <ul className="flex flex-col gap-[14px] mb-[110px] lg:mb-[133px]">
        <li className="relative">
          <span className="absolute top-[3px] left-0 w-[18px] h-[18px] bg-[#fff] rounded-full" />
          <p className="font-raleway font-semibold text-base text-[#fff] uppercase pl-7">
            Базовый курс
          </p>
        </li>
        <li className="relative">
          <span className="absolute top-[3px] left-0 w-[18px] h-[18px] bg-[#fff] rounded-full" />
          <p className="font-raleway font-semibold text-base text-[#fff] uppercase pl-7">
            38 уроков
          </p>
        </li>
      </ul>
      <button
        className="flex justify-center items-center w-[248px] h-[47px] bg-[#fff] rounded-[52px] font-manrope font-semibold text-sm text-[#0c0117] lg:w-[287px] lg:h-[57px] lg:text-base lg:mt-auto hover:scale-105 transition-transform duration-300"
        onClick={setIsOpen}
      >
        Купить
      </button>
    </motion.div>
  );
};

export default TarifBasic;
