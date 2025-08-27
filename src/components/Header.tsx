import { useState } from "react";

interface HeaderProps {
  isRTL: boolean;
  setIsRTL: (value: boolean) => void;
}

export function Header({ isRTL, setIsRTL }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
      {/* Logo */}
      <h1 className="text-xl font-bold text-blue-600">DreamHomes</h1>

      {/* Nav + Button Wrapper */}
      <div className="flex items-center gap-6">
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-600">
            {isRTL ? "من نحن" : "About"}
          </a>
          <a href="#properties" className="hover:text-blue-600">
            {isRTL ? "العقارات" : "Properties"}
          </a>
          <a href="#contact" className="hover:text-blue-600">
            {isRTL ? "اتصل بنا" : "Contact"}
          </a>
        </nav>

        {/* RTL/LTR Toggle Button */}
        <button
          onClick={() => setIsRTL(!isRTL)}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700"
        >
          Switch to {isRTL ? "LTR" : "RTL"}
        </button>
      </div>
    </header>
  );
}
