import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import ArticleIcon from "@mui/icons-material/Article";
import Brightness7Icon from "@mui/icons-material/Brightness7"; // sun
import DarkModeIcon from "@mui/icons-material/DarkMode"; // moon
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme;
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const themeVars = isDarkMode
      ? {
          "--bg": "#222",
          "--textColor": "whitesmoke",
          "--bgSoft": "#333",
          "--textColorSoft": "lightgray",
          "--border": "#444",
          "--bgSofter": "#2a2a2a",
          "--bgNav": "#1a1a2e",
          "--bgHighlight": "#5a79ff",
          "--logo": "white",
        }
      : {
          "--bg": "#fdfdfd", // Softer than white
          "--textColor": "#222", // Better than pure black
          "--bgSoft": "#e6e6eb", // More distinct than f6f3f3
          "--textColorSoft": "#666", // Matches placeholder/grayed text
          "--border": "#d3d3d8", // Neutral light border
          "--bgSofter": "#f5f5f9", // Slightly off-white
          "--bgNav": "#f1f1f6", // Softer nav background
          "--bgHighlight": "#4a65ff", // Deep highlight
          "--logo": "#222", // Visible on light bg
        };

    const root = document.documentElement;
    for (const [key, value] of Object.entries(themeVars)) {
      root.style.setProperty(key, value);
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const navs = [
    { icon: HomeIcon, text: "Home", link: "/home" },
    // { icon: PersonIcon, text: "About", link: "/about" },
    { icon: CallIcon, text: "Contact", link: "/contact" },
    { icon: ArticleIcon, text: "Portfolio", link: "/portfolio" },
  ];

  return (
    <div className=" bg-[var(--bg)] shadow-2xl shadow-[var(--bg)]-900 w-screen">
      <div className="grid grid-cols-[1fr_3fr_1fr] items-center px-4 py-2">
        {/* Theme Toggle */}
        <div className="col-span-1">
          <label
            htmlFor="theme-toggle"
            className="relative inline-flex items-center h-8 p-1 transition-colors bg-[var(--bgSoft)] rounded-full cursor-pointer w-14 "
            aria-label={`Toggle ${theme === "light" ? "dark" : "light"} mode`}
          >
            <input
              type="checkbox"
              id="theme-toggle"
              className="sr-only peer"
              checked={isDarkMode}
              onChange={toggleTheme}
            />
            <div className="flex items-center justify-between w-full h-full px-1 transition-colors duration-300 rounded-full peer-checked:bg-[var(--bgSoft)]">
              <div
                className={`absolute top-[2px] left-[2px] h-6 w-6 rounded-full bg-[var(--bg)] shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                  isDarkMode ? "translate-x-[28px]" : "translate-x-0"
                }`}
              >
                {isDarkMode ? (
                  <DarkModeIcon
                    className="text-[var(--textColor)]"
                    fontSize="small"
                  />
                ) : (
                  <Brightness7Icon
                    className="text-[var(--textColor)]"
                    fontSize="small"
                  />
                )}
              </div>
            </div>
          </label>
        </div>

        {/* Navigation Menu */}
        <div className="col-span-1">
          <nav className="flex justify-center w-full px-2">
            <ul className="flex justify-around w-full gap-10">
              {navs.map((navItem, idx) => {
                const Icon = navItem.icon;
                return (
                  <li
                    key={idx}
                    className="flex flex-col px-4 py-2 rounded-md cursor-pointer items-center text-[var(--textColor)] hover:text-[var(--textColor)] space-y-1 hover:bg-[var(--bgSoft)]"
                    onClick={() => navigate(navItem.link)}
                  >
                    <Icon fontSize="medium" />
                    <span className="text-xs">{navItem.text}</span>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="col-span-1 text-right">
          {/* Add right content here */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
