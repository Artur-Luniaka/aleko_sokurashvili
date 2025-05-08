"use client";

import { useEffect, useState } from "react";
import ByNowFormMob from "./components/ByNowFormMob/ByNowFormMob";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import ByNowFormDesk from "./components/ByNowFormDesk/ByNowFormDesk";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setIsOpen();
      }
    };

    window.addEventListener("keydown", listener);

    return () => window.removeEventListener("keydown", listener);
  }, [setIsOpen]);

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: `
      radial-gradient(circle at 30% 40%, rgba(255,255,255,0.05), transparent 40%),
      radial-gradient(circle at 70% 80%, rgba(0,255,255,0.07), transparent 60%),
      linear-gradient(180deg, #0D0C1D 0%, #1E1B3A 50%, #2C2A4A 100%)
    `,
      }}
    >
      <Header setIsOpen={setIsOpen} />
      {isOpen ? (
        <ByNowFormDesk
          setIsOpen={setIsOpen}
          handleModalClick={handleModalClick}
        />
      ) : (
        <MainContent setIsOpen={setIsOpen} />
      )}

      {isOpen && (
        <ByNowFormMob
          setIsOpen={setIsOpen}
          handleModalClick={handleModalClick}
        />
      )}
    </div>
  );
}
