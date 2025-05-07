"use client";

import Image from "next/image";
import heroMob from "../../../../public/hero-mob.jpg";
import heroDesk from "../../../../public/hero-desk.jpg";

const HeroImg = () => {
  return (
    <>
      <Image
        src={heroMob}
        width={313}
        height={354}
        alt="hero image"
        className="object-cover rounded-[20px] mb-[169px] lg:hidden"
      />
      <Image
        src={heroDesk}
        width={644}
        height={466}
        alt="hero image"
        className="hidden lg:block lg:rounded-[20px]"
      />
    </>
  );
};

export default HeroImg;
