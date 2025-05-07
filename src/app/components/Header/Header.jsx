"use client";
import Burger from "../Burger/Burger";
import LangSelect from "../LangSelect/LangSelect";
import Logo from "../Logo/Logo";
import NavMenuDesk from "../NavMenuDesk/NavMenuDesk";

const Header = () => {
  return (
    <header className="container flex justify-between items-center pt-[51px] mb-[24px] lg:pt-10 lg:mb-[67px]">
      <Logo />
      <NavMenuDesk />
      <LangSelect />
      <Burger />
    </header>
  );
};

export default Header;
