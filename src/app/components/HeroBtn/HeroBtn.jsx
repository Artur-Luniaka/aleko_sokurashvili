"use client";

import { motion } from "framer-motion";

const HeroBtn = ({ setIsOpen }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="lg:w-[534px] relative hover:scale-105 transition-transform duration-300">
        <button
          className="flex justify-center items-center w-[313px] h-[60px] bg-[#fff] rounded-full font-raleway font-semibold text-sm text-[#000] mb-[11px] lg:w-[534px] lg:h-[74px] lg:text-[22px]"
          style={{
            boxShadow: `inset 4px 6px 11px 4px rgba(167, 93, 243, 0.2)`,
          }}
          onClick={setIsOpen}
        >
          Купить со скидкой
        </button>
        <span className="absolute top-0 right-0 flex justify-center items-center h-[60px] px-1.5 bg-[#ff4a77] rounded-[30px] font-raleway font-semibold text-xl text-[#fff] lg:h-[74px] lg:text-2xl lg:px-2 lg:rounded-[37px]">
          -50%
        </span>
      </div>
      <span className="flex justify-center items-center gap-2.5 lg:w-[534px]">
        <p className="font-raleway font-semibold text-xl text-[#ff4a77] lg:text-2xl">
          1000 грн
        </p>
        <p
          className="font-raleway font-semibold text-sm text-[#c5c5c5] line-through
"
        >
          2000грн
        </p>
      </span>
    </motion.div>
  );
};

export default HeroBtn;
