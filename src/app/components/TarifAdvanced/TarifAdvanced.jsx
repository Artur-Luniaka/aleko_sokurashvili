"use client";

import { motion } from "framer-motion";

const TarifAdvanced = ({ setIsOpen }) => {
  return (
    <motion.div
      className="flex flex-col w-[313px] p-8 rounded-[28px] bg-[#fff] mb-[26px] relative lg:w-[360px] lg:mb-0 lg:px-9 lg:py-[26px]"
      style={{
        boxShadow: `inset 4px 6px 10px 4px rgba(167, 93, 243, 0.2)`,
      }}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <span
        className="absolute -top-5 left-[70px] w-[169px] h-[42px] rounded-[18px] flex justify-center items-center font-raleway font-bold text-base text-[#fff] uppercase lg:left-[99px] lg:top-[-25px]"
        style={{
          boxShadow: `0 4px 16px 1px rgba(0, 0, 0, 0.25)`,
          background: `linear-gradient(121deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)`,
        }}
      >
        Best seller
      </span>
      <span className="flex justify-between gap-[30px] mb-[18px]">
        <h3 className="font-raleway font-semibold text-base text-[#0c0117] uppercase my-auto lg:text-xl">
          Продвинутий
        </h3>
        <span className="flex justify-center items-center w-[100px] h-[42px] bg-[#0c0117] rounded-[30px] lg:w-[119px]">
          <p
            className="font-raleway font-bold text-base"
            style={{
              background: `linear-gradient(121deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            PRO
          </p>
        </span>
      </span>
      <span className="flex items-end gap-[22px] mb-[29px]">
        <p className="font-manrope font-bold text-[64px] uppercase text-[#0c0117] lg:text-[74px]">
          149 $
        </p>
        <p className="font-manrope font-bold text-xl uppercase text-[#0c0117] line-through">
          199$
        </p>
      </span>
      <ul className="flex flex-col gap-[14px] mb-[35px]">
        <li className="relative">
          <span className="absolute top-[3px] left-0 w-[18px] h-[18px] bg-[#0c0117] rounded-full" />
          <p className="font-raleway font-semibold text-base text-[#0c0117] uppercase pl-[27px]">
            база
          </p>
        </li>
        <li className="relative">
          <span className="absolute top-[3px] left-0 w-[18px] h-[18px] bg-[#0c0117] rounded-full" />
          <p className="font-raleway font-semibold text-base text-[#0c0117] uppercase pl-[27px]">
            дополнительные уроки
          </p>
        </li>
        <li className="relative">
          <span className="absolute top-[3px] left-0 w-[18px] h-[18px] bg-[#0c0117] rounded-full" />
          <p className="font-raleway font-semibold text-base text-[#0c0117] uppercase pl-[27px]">
            48 уроков
          </p>
        </li>
        <li className="relative">
          <span className="absolute top-[13px] left-0 w-[18px] h-[18px] bg-[#0c0117] rounded-full" />
          <p className="font-raleway font-semibold text-base text-[#0c0117] uppercase pl-[27px]">
            чат-комьюнити для создателей контента
          </p>
        </li>
      </ul>
      <button
        className="flex justify-center items-center w-[248px] h-[47px] bg-[#0c0117] rounded-[52px] font-manrope font-semibold text-sm text-[#fff] lg:w-[287px] lg:h-[57px] lg:text-base lg:mt-auto"
        onClick={setIsOpen}
      >
        Купить
      </button>
    </motion.div>
  );
};

export default TarifAdvanced;
