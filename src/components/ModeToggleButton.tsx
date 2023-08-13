"use client";

import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

export default function ModeToggleButton() {
  const [theme, setTheme] = useState<string>();

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      className="p-2 rounded-full text-black hover:bg-slate-50 dark:text-white dark:hover:bg-slate-700"
      onClick={toggleDarkMode}
    >
      {theme === "dark" ? <MdLightMode /> : <MdOutlineDarkMode />}
    </button>
  );
}
