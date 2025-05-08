"use client";

import { motion } from "framer-motion";

const AdditionalBanner = ({ setIsOpen }) => {
  return (
    <div className="container flex flex-col my-[113px] lg:mt-[60px] lg:mb-[80px]">
      <motion.div
        className="lg:w-[447px] lg:mx-auto"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h3 className="font-raleway font-bold text-xl text-[#fff] text-center uppercase mb-5 lg:text-4xl">
          Узнай, как создавать контент,который
          <br />
          <span
            style={{
              background: `linear-gradient(84deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            покоряет аудитории
          </span>
        </h3>
      </motion.div>
      <motion.p
        className="font-raleway font-medium text-sm text-[#fff] text-center mb-[62px] lg:text-2xl lg:w-[447px] lg:mx-auto lg:mb-11"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Материалы, способные стать вирусными и охватить тысячи людей!
      </motion.p>
      <motion.div
        className="relative w-[268px] mx-auto lg:w-[534px]"
        onClick={setIsOpen}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <button
          className="flex justify-center items-center w-[268px] h-[68px] rounded-[40px] lg:w-[534px]"
          style={{
            boxShadow: `inset 4px 6px 10px 4px rgba(167, 93, 243, 0.2)`,
            background: `linear-gradient(121deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)`,
          }}
        >
          <span className="font-raleway font-semibold text-sm text-[#fff] mr-[29px] lg:text-[22px] lg:mr-0">
            Купить со скидкой
          </span>
        </button>
        <span className="absolute top-0 right-0 flex justify-center items-center h-[68px] px-1.5 bg-[#ff4a77] rounded-[40px] font-raleway font-semibold text-xl text-[#fff] lg:text-2xl">
          -50%
        </span>
      </motion.div>
    </div>
  );
};

export default AdditionalBanner;
