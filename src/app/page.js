"use client";

import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

export default function Home() {
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
      <Header />
      <MainContent />
    </div>
  );
}
