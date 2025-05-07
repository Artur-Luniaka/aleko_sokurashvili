"use client";

import Image from "next/image";
import burger from "../../../../public/burger.svg";

const Burger = () => {
  return (
    <Image
      src={burger}
      alt="menu icon"
      width={31}
      height={21}
      className="cursor-pointer lg:hidden"
    />
  );
};

export default Burger;
