"use client";
import Burger from "../Burger/Burger";
import HeaderBtn from "../HeaderBtn/HeaderBtn";
import LangSelect from "../LangSelect/LangSelect";
import Logo from "../Logo/Logo";
import NavMenuDesk from "../NavMenuDesk/NavMenuDesk";

const Header = ({ setIsOpen }) => {
  return (
    <header className="container flex justify-between items-center pt-[51px] mb-[24px] lg:pt-10 lg:mb-[67px]">
      <Logo />
      <NavMenuDesk />
      <LangSelect />
      <HeaderBtn setIsOpen={setIsOpen} />
      <Burger />
    </header>
  );
};

export default Header;
