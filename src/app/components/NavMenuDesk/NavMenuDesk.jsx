"use client";

import Link from "next/link";

const NavMenuDesk = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-7">
        <li>
          <Link
            href="/"
            className="font-raleway font-medium text-base text-[#fff] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#ff4a77] to-[#ffbb77] transition-colors duration-300"
          >
            Структура
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="font-raleway font-medium text-base text-[#fff] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#ff4a77] to-[#ffbb77] transition-colors duration-300"
          >
            Обо мне
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="font-raleway font-medium text-base text-[#fff] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#ff4a77] to-[#ffbb77] transition-colors duration-300"
          >
            Плюсы
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="font-raleway font-medium text-base text-[#fff] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#ff4a77] to-[#ffbb77] transition-colors duration-300"
          >
            Отзывы
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="font-raleway font-medium text-base text-[#fff] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#ff4a77] to-[#ffbb77] transition-colors duration-300"
          >
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenuDesk;
