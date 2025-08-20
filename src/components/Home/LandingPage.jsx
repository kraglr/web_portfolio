import { lazy, Suspense, useEffect, useState } from "react";
import bg from "../../assets/img/generatedimg.webp";
import bgpng from "../../assets/img/generatedimg.png";

const Typewriter = lazy(() => import("typewriter-effect"));

const LandingPage = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    // Preload background programmatically too
    const img = new Image();
    img.src = bg;
    img.onload = () => setBgLoaded(true);
    img.onerror = () => {
      // fallback if webp fails, try png
      const fallback = new Image();
      fallback.src = bgpng;
      fallback.onload = () => setBgLoaded(true);
    };
  }, []);

  if (!bgLoaded) {
    return (
      <div className="flex items-center justify-center w-screen h-screen text-white bg-black">
        <span className="animate-pulse">Loading...</span>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col justify-center items-center text-[var(--textColor)] bg-[var(--bg)] lg:h-[70vh] h-screen overflow-hidden space-y-8">
      <picture>
        <source srcSet={bg} type="image/webp" />
        <img
          src={bgpng}
          alt="Background"
          className="absolute top-0 left-0 object-cover w-full h-full opacity-30 blur-sm"
          loading="eager" // ✅ browser loads immediately
          fetchpriority="high" // ✅ prioritize above others
          decoding="async" // ✅ decode off main thread
        />
      </picture>

      <h1 className="relative z-10 max-w-5xl px-4 text-3xl leading-snug text-center md:text-5xl">
        <Suspense fallback={<span className="opacity-0">.</span>}>
          <Typewriter
            options={{
              strings: [
                "Full-Stack Laravel & React Developer",
                "Building Scalable Web Systems",
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 30,
            }}
          />
        </Suspense>
      </h1>
    </div>
  );
};

export default LandingPage;
