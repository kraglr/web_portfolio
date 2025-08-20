import React, { useRef, useEffect, useState, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AboutMe = lazy(() => import("../AboutContent/AboutMe"));
const CareerStats = lazy(() => import("../Home/CareerStats"));
const GitHubContributions = lazy(() =>
  import("../AboutContent/GitHubContributions")
);

const sectionsConfig = [
  { key: "aboutMe", title: "About Me", component: <AboutMe /> },
  { key: "careerStats", title: "Career Stats", component: <CareerStats /> },
  {
    key: "github",
    title: "GitHub Contributions",
    component: <GitHubContributions username="kraglr" />,
  },
];

const SuspenseFallback = () => (
  <div className="flex items-center justify-center w-full h-48 text-[var(--textColorSoft)]">
    Loading component...
  </div>
);

const About = ({ scrollContainerRef }) => {
  const [pinnedKey, setPinnedKey] = useState(null);

  // Initialize refs directly - don't use useEffect for ref creation
  const sectionRefs = useRef(
    sectionsConfig.reduce((acc, { key }) => {
      acc[key] = React.createRef();
      return acc;
    }, {})
  );

  // IntersectionObserver effect for pinning sections
  useEffect(() => {
    const container = scrollContainerRef?.current;
    if (!container) {
      console.warn("Scroll container ref is not attached.");
      return;
    }

    // Wait for components to render and refs to be attached
    const timeoutId = setTimeout(() => {
      // Check which refs are actually attached
      const availableRefs = [];
      sectionsConfig.forEach(({ key }) => {
        const element = sectionRefs.current[key]?.current;
        if (element) {
          availableRefs.push({ key, element });
          console.log(`Section ${key} ref attached:`, element);
        } else {
          console.warn(`Section ${key} ref is null`);
        }
      });

      if (availableRefs.length === 0) {
        console.warn(
          "No section elements found for observation. Retrying in 500ms..."
        );
        // Retry after a longer delay
        setTimeout(() => {
          // Recursive retry logic could go here if needed
        }, 500);
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          const containerRect = container.getBoundingClientRect();
          const pinOffset = 96; // Changed back to match top-24 (24 * 4 = 96px)

          let newPinnedKey = null;

          // Check each entry
          entries.forEach((entry) => {
            const refData = availableRefs.find(
              (r) => r.element === entry.target
            );
            if (!refData) return;

            const rect = entry.boundingClientRect;
            const sectionTop = rect.top - containerRect.top;
            const sectionBottom = rect.bottom - containerRect.top;

            console.log(
              `Section ${refData.key}: top=${sectionTop.toFixed(
                2
              )}, bottom=${sectionBottom.toFixed(2)}, pinOffset=${pinOffset}`
            );

            // Check if section has crossed the pin line and is still visible
            if (sectionTop <= pinOffset && sectionBottom > pinOffset) {
              newPinnedKey = refData.key;
              console.log(`Section ${refData.key} should be pinned`);
            }
          });

          setPinnedKey((prevKey) => {
            if (prevKey !== newPinnedKey) {
              console.log(
                "Pinned section changed from",
                prevKey,
                "to",
                newPinnedKey
              );
              return newPinnedKey;
            }
            return prevKey;
          });
        },
        {
          root: null, // <-- this makes it use window scroll
          rootMargin: "0px",
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        }
      );

      // Observe all available elements
      availableRefs.forEach(({ element }) => {
        observer.observe(element);
      });

      // Cleanup function
      return () => {
        availableRefs.forEach(({ element }) => {
          observer.unobserve(element);
        });
      };
    }, 200); // Increased delay

    return () => {
      clearTimeout(timeoutId);
    };
  }, [scrollContainerRef]);

  return (
    <div className="w-[95%] px-3 mx-auto bg-[var(--bgSoft)] rounded-md grid grid-cols-[1fr_3fr_1fr] items-start gap-6">
      {/* Left nav column */}
      {/* Left nav */}
      <nav className="border-r border-[var(--border)] pr-2">
        {/* Optional nav content */}
      </nav>

      {/* Center scrollable column */}
      <div
        ref={scrollContainerRef}
        className="flex flex-col space-y-6 overflow-y-auto max-h-[calc(100vh-6rem)]"
      >
        {sectionsConfig.map(({ key, component }) => (
          <motion.section
            key={key}
            ref={sectionRefs.current[key]}
            initial={false}
            animate={{ opacity: pinnedKey === key ? 0.3 : 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="transition-all duration-300 min-h-[50vh]"
            data-section={key}
          >
            <Suspense fallback={<SuspenseFallback />}>{component}</Suspense>
          </motion.section>
        ))}
      </div>

      {/* Right sticky preview */}
      <aside className="sticky self-start top-24 h-fit">
        <AnimatePresence mode="wait">
          {pinnedKey && (
            <motion.div
              key={pinnedKey}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-md shadow-lg"
            >
              <div className="mb-2 text-sm font-semibold text-[var(--textColorSoft)] uppercase tracking-wide">
                Currently Viewing
              </div>
              <div className="text-lg font-bold text-[var(--bgHighlight)] mb-3">
                {sectionsConfig.find((s) => s.key === pinnedKey)?.title}
              </div>
              <div className="origin-top transform scale-90">
                <Suspense fallback={<SuspenseFallback />}>
                  {sectionsConfig.find((s) => s.key === pinnedKey)?.component}
                </Suspense>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </aside>
    </div>
  );
};

export default About;
