import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
// Lottie animation will be loaded on demand
import animationData from "../../assets/img/lotties/Developer Front End.json";

import bg from "../../assets/img/generatedimg.webp";
import bgpng from "../../assets/img/generatedimg.png";

// Lazy load components for better performance
const Lottie = lazy(() => import("lottie-react"));
const Typewriter = lazy(() => import("typewriter-effect"));

// Fallback for the typewriter to prevent layout shift
const TypewriterFallback = () => (
  <span className="opacity-75">Web Developer</span>
);

// Fallback for the Lottie animation to reserve space
const LottieFallback = () => (
  <div
    style={{ width: 400, height: 400 }}
    className="rounded-full bg-black/10"
  />
);

// Framer Motion variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Faster stagger
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function LandingPage({
  scrollToPortfolio,
  scrollToContact,
  scrollToNext,
}) {
  return (
    <section
      className="futuristic-bg relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden font-sans text-white bg-[#050c16]"
      aria-label="Hero Section"
    >
      {/* Background Image with fallback and performance optimizations */}
      <motion.picture
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <source srcSet={bg} type="image/webp" />
        <img
          src={bgpng}
          alt="" // Decorative, so alt is empty
          className="absolute inset-0 object-cover w-full h-full"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
      </motion.picture>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      {/* Glassmorphism Panel with Glowing Border */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-panel relative z-10 w-[90%] max-w-6xl p-8 md:p-12"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center lg:flex-row lg:justify-between"
        >
          {/* Left Column: Text and CTAs */}
          <div className="w-full text-center lg:w-3/5 lg:text-left">
            <motion.h1
              variants={itemVariants}
              className="mb-2 text-4xl font-extrabold sm:text-6xl text-glow"
            >
              Hi, I’m
            </motion.h1>
            <motion.h1
              variants={itemVariants}
              className="mb-4 text-4xl font-extrabold sm:text-6xl"
            >
              <span className="text-transparent text-glow bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Kier Aguilar
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="h-16 mb-8 text-xl sm:text-3xl sm:h-auto"
            >
              <Suspense fallback={<TypewriterFallback />}>
                <Typewriter
                  options={{
                    strings: [
                      "Web Developer",
                      "Full-Stack Engineer",
                      "Creative Problem Solver",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                    wrapperClassName: "text-cyan-300",
                    cursorClassName: "text-cyan-300",
                  }}
                />
              </Suspense>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToPortfolio}
                className="px-6 py-3 font-semibold text-white transition-all duration-300 border rounded-lg shadow-lg cursor-pointer button-glow bg-cyan-600/80 border-cyan-500/50 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#050c16]"
              >
                View My Work
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-6 py-3 font-semibold text-gray-900 transition-colors duration-300 bg-white rounded-lg shadow-lg cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-[#050c16]"
              >
                Let’s Connect
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column: Lottie Animation */}
          <motion.div
            variants={itemVariants}
            className="justify-center hidden w-full mt-10 lg:w-2/5 lg:justify-end lg:mt-0 lg:flex"
          >
            <Suspense fallback={<LottieFallback />}>
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{ width: 400, height: 400 }}
              />
            </Suspense>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* Pulsing Scroll Down Icon */}
      <motion.div
        className="absolute z-20 cursor-pointer bottom-5 left-1/2"
        style={{ x: "-50%" }}
        onClick={scrollToNext}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        title="Scroll Down"
      >
        <svg
          className="w-8 h-8 transition-colors text-white/70 hover:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
}
