"use client";
import Burger from "../Burger/Burger";
import LangSelect from "../LangSelect/LangSelect";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className="flex justify-between items-center pt-[51px] mb-[24px] lg:pt-10 lg:mb-[67px]">
      <Logo />
      <LangSelect />
      <Burger />
    </header>
  );
};

export default Header;
