"use client";

import Link from "next/link";

const NavMenuDesk = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-7">
        <li>
          <Link
            href="/"
            className="font-raleway font-medium text-base text-[#fff]"
          >
            Структура
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="font-raleway font-medium text-base text-[#fff]"
          >
            Обо мне
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="font-raleway font-medium text-base text-[#fff]"
          >
            Плюсы
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="font-raleway font-medium text-base text-[#fff]"
          >
            Отзывы
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="font-raleway font-medium text-base text-[#fff]"
          >
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenuDesk;
