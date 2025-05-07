"use client";

const HeroMainText = () => {
  return (
    <div className="mb-11">
      <div className="absolute bottom-[245px] left-0">
        <p
          className="font-raleway font-bold text-xl text-center"
          style={{
            background: `linear-gradient(151deg, #90e8ff 0%, #9c9eff 40.3%, #e3a1ff 79.87%, #e56f8c 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          От 0 до 100,000 за 90 дней
        </p>
        <h1 className="font-raleway font-extrabold text-[54px] text-[#fff] text-center uppercase leading-tight">
          Секреты Вирусных Видео
        </h1>
      </div>
      <p className="font-raleway font-normal text-sm text-[#fff] text-center">
        Станьте известным всего за 3 месяца без затрат на рекламу! Узнайте ключ
        к созданию вирусного контента и превратите свои идеи в миллионные
        просмотры.
      </p>
    </div>
  );
};

export default HeroMainText;
