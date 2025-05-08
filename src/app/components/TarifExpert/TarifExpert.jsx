"use client";

import { motion } from "framer-motion";

const TarifExpert = ({ setIsOpen }) => {
  return (
    <motion.div
      className="flex flex-col w-[313px] p-8 rounded-[28px] lg:w-[360px] lg:px-9 lg:py-[26px]"
      style={{
        boxShadow: `inset 4px 6px 10px 4px rgba(167, 93, 243, 0.2)`,
        background: `linear-gradient(121deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)`,
      }}
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="flex justify-between gap-[30px] mb-[18px]">
        <h3 className="font-raleway font-semibold text-base text-[#fff] uppercase my-auto lg:text-xl">
          ЭКСПЕРТ
        </h3>
        <span className="flex justify-center items-center w-[119px] h-[42px] bg-[#fff] rounded-[30px]">
          <p
            className="font-raleway font-bold text-base"
            style={{
              background: `linear-gradient(121deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Expert
          </p>
        </span>
      </span>
      <span className="flex items-end gap-[22px] mb-[29px]">
        <p className="font-manrope font-bold text-[64px] uppercase text-[#fff] lg:text-[74px]">
          299 $
        </p>
        <p className="font-manrope font-bold text-xl uppercase text-[#fff] line-through">
          500$
        </p>
      </span>
      <ul className="flex flex-col gap-[14px] mb-[22px]">
        <li className="relative">
          <span className="absolute top-[3px] left-0 w-[18px] h-[18px] bg-[#fff] rounded-full" />
          <p className="font-raleway font-semibold text-base text-[#fff] uppercase pl-[27px]">
            дополнительные уроки
          </p>
        </li>
        <li className="relative">
          <span className="absolute top-[3px] left-0 w-[18px] h-[18px] bg-[#fff] rounded-full" />
          <p className="font-raleway font-semibold text-base text-[#fff] uppercase pl-[27px]">
            48 уроков
          </p>
        </li>
        <li className="relative">
          <span className="absolute top-[13px] left-0 w-[18px] h-[18px] bg-[#fff] rounded-full" />
          <p className="font-raleway font-semibold text-base text-[#fff] uppercase pl-[27px]">
            чат-комьюнити для создателей контента
          </p>
        </li>
        <li className="relative">
          <span className="absolute top-[13px] left-0 w-[18px] h-[18px] bg-[#fff] rounded-full" />
          <p className="font-raleway font-semibold text-base text-[#fff] uppercase pl-[27px]">
            Разбор вашей страницы в формате видеозвонка
          </p>
        </li>
      </ul>
      <button
        className="flex justify-center items-center w-[248px] h-[47px] bg-[#0c0117] rounded-[52px] font-manrope font-semibold text-sm text-[#fff] lg:w-[287px] lg:h-[57px] lg:text-base hover:scale-105 transition-transform duration-300"
        onClick={setIsOpen}
      >
        Купить
      </button>
    </motion.div>
  );
};

export default TarifExpert;
