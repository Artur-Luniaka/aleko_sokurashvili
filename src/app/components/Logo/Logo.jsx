"use client";

import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-montserrat font-bold text-base text-[#fff] uppercase lg:text-lg lg:mr-[100px]"
    >
      Aleko{" "}
      <span
        style={{
          background: `linear-gradient(84deg, #5bdbfd 0%, #7375ff 40.3%, #df93ff 79.87%, #e56f8c 100%);`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Sokurashvili
      </span>
    </Link>
  );
};

export default Logo;
