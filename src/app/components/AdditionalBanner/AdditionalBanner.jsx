"use client";

const AdditionalBanner = () => {
  return (
    <div className="container flex flex-col my-[113px]">
      <div>
        <h3 className="font-raleway font-bold text-xl text-[#fff] text-center uppercase mb-5">
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
      </div>
      <p className="font-raleway font-medium text-sm text-[#fff] text-center mb-[62px]">
        Материалы, способные стать вирусными и охватить тысячи людей!
      </p>
      <div className="relative w-[268px] mx-auto">
        <button
          className="flex justify-center items-center w-[268px] h-[68px] rounded-[40px]"
          style={{
            boxShadow: `inset 4px 6px 10px 4px rgba(167, 93, 243, 0.2)`,
            background: `linear-gradient(121deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)`,
          }}
        >
          <span className="font-raleway font-semibold text-sm text-[#fff] mr-[29px]">
            Купить со скидкой
          </span>
        </button>
        <span className="absolute top-0 right-0 flex justify-center items-center h-[68px] px-1.5 bg-[#ff4a77] rounded-[40px] font-raleway font-semibold text-xl text-[#fff]">
          -50%
        </span>
      </div>
    </div>
  );
};

export default AdditionalBanner;
