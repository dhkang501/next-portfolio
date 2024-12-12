"use client";

import { useTheme } from "next-themes";
import { IoMdSunny } from "react-icons/io";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="top-6 right-4">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <IoMdSunny size={'34px'}/>
      </button>
    </div>
  );
};

export default ThemeToggle;
