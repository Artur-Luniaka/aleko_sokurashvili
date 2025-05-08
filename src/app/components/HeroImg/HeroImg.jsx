"use client";

import Image from "next/image";
import heroMob from "../../../../public/hero-mob.jpg";
import heroDesk from "../../../../public/hero-desk.jpg";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const HeroImg = () => {
  return (
    <>
      <MotionImage
        src={heroMob}
        width={313}
        height={354}
        alt="hero image"
        className="object-cover rounded-[20px] mb-[169px] lg:hidden"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <MotionImage
        src={heroDesk}
        width={644}
        height={466}
        alt="hero image"
        className="hidden lg:block lg:rounded-[20px]"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </>
  );
};

export default HeroImg;
