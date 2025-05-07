"use client";

const HeroBtn = () => {
  return (
    <>
      <span className="relative">
        <button
          className="flex justify-center items-center w-[313px] h-[60px] bg-[#fff] rounded-full font-raleway font-semibold text-sm text-[#000] mb-[11px] "
          style={{
            boxShadow: `inset 4px 6px 11px 4px rgba(167, 93, 243, 0.2)`,
          }}
        >
          Купить со скидкой
        </button>
        <span className="absolute top-0 right-0 flex justify-center items-center h-[60px] px-1.5 bg-[#ff4a77] rounded-[30px] font-raleway font-semibold text-xl text-[#fff]">
          -50%
        </span>
      </span>
      <span className="flex justify-center items-center gap-2.5">
        <p className="font-raleway font-semibold text-xl text-[#ff4a77]">
          1000 грн
        </p>
        <p
          className="font-raleway font-semibold text-sm text-[#c5c5c5] line-through
"
        >
          2000грн
        </p>
      </span>
    </>
  );
};

export default HeroBtn;
