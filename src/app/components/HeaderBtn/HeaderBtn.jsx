"use client";

const HeaderBtn = ({ setIsOpen }) => {
  return (
    <button
      className="hidden lg:flex justify-center items-center w-[190px] h-10 rounded-full font-raleway font-medium text-xs text-[#fff]"
      style={{
        background: `linear-gradient(84deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%)`,
      }}
      onClick={setIsOpen}
    >
      Купить со скидкой
    </button>
  );
};

export default HeaderBtn;
