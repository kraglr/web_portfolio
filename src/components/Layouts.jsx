import { useEffect, useRef, useState, lazy, Suspense } from "react";

import { AnimatePresence, motion } from "framer-motion";

import Profile from "./AboutContent/Profile";

import { useDevice } from "../contexts/DeviceContext";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import ArticleIcon from "@mui/icons-material/Article";
import { IoMdSunny } from "react-icons/io";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const Contents = lazy(() => import("./Contents"));
const Portfolio = lazy(() => import("./Portfolio"));
const ContactMe = lazy(() => import("./ContactMe"));

const SectionFallback = () => (
  <div className="flex items-center justify-center w-full min-h-screen text-[var(--textColorSoft)]">
    Loading section...
  </div>
);

const Layouts = () => {
  const profileRef = useRef();
  const aboutRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();
  const { isMobile } = useDevice();

  const mainScrollRef = useRef();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const navRefs = {
    Home: profileRef,
    About: aboutRef,
    Portfolio: portfolioRef,
    Contact: contactRef,
  };
  useEffect(() => {
    // alert(isDarkMode);
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
    // setIsDarkMode(localStorage.getItem("isDarkMode"));
  }, [isDarkMode]);

  const toggleTheme = () => {
    localStorage.setItem("isDarkMode", !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (
      !profileRef.current ||
      !aboutRef.current ||
      !portfolioRef.current ||
      !contactRef.current
    )
      return;

    const sectionMap = new Map([
      [profileRef.current, "Home"],
      [aboutRef.current, "About"],
      [portfolioRef.current, "Portfolio"],
      [contactRef.current, "Contact"],
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

  const scrollToNext = () => {
    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navs = [
    { icon: HomeIcon, text: "Home", link: "/home" },
    { icon: PersonIcon, text: "About", link: "/about" },
    { icon: ArticleIcon, text: "Portfolio", link: "/portfolio" },
    { icon: CallIcon, text: "Contact", link: "/contact" },
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
          className={`fixed left-1/2 -translate-x-1/2 z-50 px-2  py-2 mx-auto border-t border-[var(--border)] bg-[var(--bg)] grid ${
            showStickyNav
              ? `top-0 w-full ${
                  isMobile ? "grid-cols-[4fr_1fr]" : "grid-cols-[1fr_3fr_1fr]"
                } shadow-md`
              : "bottom-0 w-full grid-cols-[4fr_1fr] hidden"
          }`}
        >
          {showStickyNav && !isMobile && <div className="col-span-1" />}

          {/* Navigation List */}
          <nav
            className={`flex ${
              showStickyNav ? "justify-center" : "justify-start"
            } col-span-1 px-3`}
          >
            <ul
              className={`flex ${
                showStickyNav ? "justify-center" : "justify-start"
              } w-full ${isMobile ? "gap-3" : "gap-10"}`}
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
                    {showStickyNav || isMobile ? (
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
          {isMobile && (
            <div className="flex items-center col-span-1 ">
              {isDarkMode ? (
                <DarkModeIcon
                  className="text-yellow-300"
                  fontSize="small"
                  onClick={toggleTheme}
                />
              ) : (
                <IoMdSunny
                  className="text-2xl text-yellow-500"
                  onClick={toggleTheme}
                />
              )}
            </div>
          )}
          {!isMobile && (
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
          )}
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}

      <main
        ref={mainScrollRef}
        className="flex flex-col flex-1 w-screen min-h-screen space-y-3 overflow-y-auto"
      >
        <section ref={profileRef} data-id="Home" className="mb-3">
          <Profile
            scrollToPortfolio={scrollToPortfolio}
            scrollToContact={scrollToContact}
            scrollToNext={scrollToNext}
          />
        </section>
        <section ref={aboutRef} data-id="about" className="">
          <Suspense fallback={<SectionFallback />}>
            <Contents scrollContainerRef={mainScrollRef} />
          </Suspense>
        </section>
        <section ref={portfolioRef} data-id="portfolio" className="">
          <Suspense fallback={<SectionFallback />}>
            <Portfolio scrollContainerRef={mainScrollRef} />
          </Suspense>
        </section>
        <section ref={contactRef} data-id="contact" className="">
          <Suspense fallback={<SectionFallback />}>
            <ContactMe />
          </Suspense>
        </section>
      </main>
    </div>
  );
};

export default Layouts;
