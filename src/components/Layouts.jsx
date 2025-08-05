import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Profile from "./AboutContent/Profile";
import GitHubContributions from "./AboutContent/GitHubContributions";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import ArticleIcon from "@mui/icons-material/Article";
import { IoMdSunny } from "react-icons/io";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CareerStats from "./Home/CareerStats";
import About from "./Contents/About";
import Contents from "./Contents";

const Layouts = () => {
  const location = useLocation();
  const profileRef = useRef();
  const aboutRef = useRef(); // Add this
  const navigate = useNavigate();
  const mainScrollRef = useRef();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const navRefs = {
    Home: profileRef,
    About: aboutRef,
    // Add more when needed (Contact, Portfolio, etc.)
  };
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
          "--bg": "#fdfdfd",
          "--textColor": "#222",
          "--bgSoft": "#e6e6eb",
          "--textColorSoft": "#666",
          "--border": "#d3d3d8",
          "--bgSofter": "#f5f5f9",
          "--bgNav": "#f1f1f6",
          "--bgHighlight": "#4a65ff",
          "--logo": "#222",
        };

    const root = document.documentElement;
    for (const [key, value] of Object.entries(themeVars)) {
      root.style.setProperty(key, value);
    }
    setIsDarkMode(localStorage.getItem("isDarkMode") === "true");
  }, [isDarkMode]);

  const toggleTheme = () => {
    localStorage.setItem("isDarkMode", !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (!profileRef.current || !aboutRef.current) return;

    const sectionMap = new Map([
      [profileRef.current, "Home"],
      [aboutRef.current, "About"],
    ]);

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostVisibleSection = "Home";

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = sectionMap.get(entry.target);
          }
        });

        setShowStickyNav(mostVisibleSection !== "Home");

        setActiveNav(mostVisibleSection);
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    for (let section of sectionMap.keys()) {
      observer.observe(section);
    }

    return () => {
      for (let section of sectionMap.keys()) {
        observer.unobserve(section);
      }
    };
  });

  const navs = [
    { icon: HomeIcon, text: "Home", link: "/home" },
    { icon: PersonIcon, text: "About", link: "/about" },
    { icon: CallIcon, text: "Contact", link: "/contact" },
    { icon: ArticleIcon, text: "Portfolio", link: "/portfolio" },
  ];

  return (
    <div className="bg-[var(--bgSoft)] text-[var(--textColor)] max-h-screen flex flex-col">
      {/* Animated Nav Bar */}
      <AnimatePresence mode="wait">
        <motion.div
          key={showStickyNav ? "top" : "bottom"}
          initial={{
            opacity: 0,
            y: showStickyNav ? -60 : 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: showStickyNav ? -40 : 40,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={`fixed left-1/2 -translate-x-1/2 z-50 px-4 py-2 mx-auto border-t border-[var(--border)] bg-[var(--bg)] grid ${
            showStickyNav
              ? "top-0 w-full grid-cols-[1fr_3fr_1fr] shadow-md"
              : "bottom-0 w-full grid-cols-[3fr_1fr]"
          }`}
        >
          {showStickyNav && <div className="col-span-1" />}

          {/* Navigation List */}
          <nav
            className={`flex ${
              showStickyNav ? "justify-center" : "justify-start"
            } col-span-1 px-12`}
          >
            <ul
              className={`flex ${
                showStickyNav ? "justify-center" : "justify-start"
              } w-full gap-10`}
            >
              {navs.map((navItem, idx) => {
                const Icon = navItem.icon;
                return (
                  <motion.li
                    key={navItem.text}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col px-4 py-2 cursor-pointer items-center space-y-1 ${
                      activeNav === navItem.text
                        ? "border-b-3 border-[var(--bgHighlight)]"
                        : ""
                    }`}
                    onClick={() => {
                      const ref = navRefs[navItem.text];
                      if (ref?.current) {
                        ref.current.scrollIntoView({
                          behavior: "smooth",
                          block: "start", // aligns the section to the top
                        });
                      }
                    }}
                  >
                    {showStickyNav ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * idx }}
                      >
                        <Icon fontSize="medium" />
                      </motion.div>
                    ) : (
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="text-md"
                      >
                        {navItem.text}
                      </motion.span>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Theme Toggle */}
          <div className="flex items-end justify-end col-span-1">
            <label
              htmlFor="theme-toggle"
              className="relative inline-flex items-center h-8 p-1 transition-colors bg-[var(--bgSoft)] rounded-full cursor-pointer w-14"
              aria-label={`Toggle ${isDarkMode ? "light" : "dark"} mode`}
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
                  className={`absolute top-[2px] left-[2px] h-6 w-6 rounded-full  shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                    isDarkMode
                      ? "translate-x-[28px] bg-[var(--bg)]"
                      : "translate-x-0 bg-white"
                  }`}
                >
                  {isDarkMode ? (
                    <DarkModeIcon
                      className="text-yellow-300"
                      fontSize="small"
                    />
                  ) : (
                    <IoMdSunny className="text-2xl text-yellow-500" />
                  )}
                </div>
              </div>
            </label>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}

      <main
        ref={mainScrollRef}
        className="flex flex-col flex-1 w-screen min-h-screen space-y-1 overflow-y-auto"
      >
        <section ref={profileRef} data-id="Home" className="mb-3">
          <Profile />
        </section>
        <section ref={aboutRef} data-id="about" className="">
          <Contents scrollContainerRef={mainScrollRef} />
        </section>
      </main>
    </div>
  );
};

export default Layouts;
