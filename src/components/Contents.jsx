import React, { useState } from "react";
import AboutMe from "./AboutContent/AboutMe";
import CareerStats from "./Home/CareerStats";
import GitHubContributions from "./AboutContent/GitHubContributions";
import profilePic from "../assets/img/profile.jpg";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaStackOverflow } from "react-icons/fa";
import vite from "../assets/svg/logo.svg";

function ViteIcon() {
  return <img src={vite} alt="Vite logo" className="w-10 h-10" />;
}
import styled, { keyframes } from "styled-components";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
} from "react-icons/fa";
import {
  SiMysql,
  SiPostman,
  SiBootstrap,
  SiTailwindcss,
  SiExpress,
  SiSass,
  SiLaravel,
  SiSelenium,
  SiApache,
  SiMongodb,
  SiLivewire,
} from "react-icons/si";
import Education from "./AboutContent/Education";
import Experience from "./AboutContent/Experience";

// Scroll to the left
const toLeftScroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

// Scroll to the right
const toRightScroll = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

// Carousel container
const CarouselWrapper = styled.div`
  overflow: visible;
  width: 100%;
  background: var(--bg);
  padding: 1rem 0;
  position: relative;
  &:hover div {
    animation-play-state: paused;
  }
`;

// Track with animations
const IconTrackLeft = styled.div`
  display: flex;
  width: max-content;
  animation: ${toLeftScroll} 20s linear infinite;
  flex-shrink: 0;
`;

const IconTrackRight = styled.div`
  display: flex;
  width: max-content;
  animation: ${toRightScroll} 20s linear infinite;
  flex-shrink: 0;
`;

// Icon style - ADD position: relative;
const IconBox = styled.div`
  font-size: 2rem;
  color: white;
  margin: 0 1rem;
  flex-shrink: 0;
  position: relative; /* ADD THIS LINE */
  display: flex; /* Make it a flex container to center the icon */
  align-items: center; /* Center icon vertically */
  justify-content: center; /* Center icon horizontally */
`;
// Tooltip container
// Add this along with your other styled components
// Tooltip styled component
// Tooltip styled component
const Tooltip = styled.div`
  position: absolute;
  z-index: 50;
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: white;
  background-color: var(--bgSoft);
  border-radius: 0.375rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0s linear 0.3s;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    border-width: 5px;
    border-style: solid;
  }

  ${(props) =>
    props.$position === "top" && // <--- CHANGE HERE: Use $position
    `
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);

    &::before {
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-color: var(--bgSoft) transparent transparent transparent;
    }
  `}

  ${(props) =>
    props.$position === "bottom" && // <--- CHANGE HERE: Use $position
    `
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);

    &::before {
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-color: transparent transparent var(--bgSoft) transparent;
    }
  `}

  ${IconBox}:hover & {
    opacity: 1;
    visibility: visible;
    transition-delay: 0s;
  }
`;

const LeftBar = () => {
  // No need for useState for simple hover tooltips with this approach
  // const [tooltip, setTooltip] = useState(null);
  // const [tooltipPosition, setTooltipPosition] = useState("top");

  const toLeftIcons = [
    { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
    { icon: <SiBootstrap className="text-[#7952B3]" />, name: "Bootstrap" },
    {
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
      name: "Tailwind CSS",
    },
    { icon: <SiSass className="text-[#CC6699]" />, name: "Sass" },
    { icon: <FaGithub className="text-[#181717]" />, name: "GitHub" },
    { icon: <FaHtml5 className="text-[#E34F26]" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-[#1572B6]" />, name: "CSS3" },
    { icon: <FaJs className="text-[#F7DF1E]" />, name: "JavaScript" },
    { icon: <SiLivewire className="text-[#4E56A6]" />, name: "Livewire" },
    { icon: <ViteIcon />, name: "Vite" },
  ];

  const toRightIcons = [
    { icon: <FaNodeJs className="text-[#339933]" />, name: "Node.js" },
    { icon: <SiLaravel className="text-[#FF2D20]" />, name: "Laravel" },
    { icon: <SiMysql className="text-[#00758F]" />, name: "MySQL" },
    { icon: <SiExpress className="text-[#000000]" />, name: "Express" },
    { icon: <SiPostman className="text-[#FF6C37]" />, name: "Postman" },
    { icon: <FaPhp className="text-[#777BB4]" />, name: "PHP" },
    { icon: <SiSelenium className="text-[#43B02A]" />, name: "Selenium" },
    { icon: <SiApache className="text-[#D22128]" />, name: "Apache" },
    { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" },
  ];

  // We are removing handleMouseEnter and handleMouseLeave because CSS handles it now.

  // Duplicate icons for continuous scroll effect
  const toLeft = [...toLeftIcons, ...toLeftIcons];
  const toRight = [...toRightIcons, ...toRightIcons];

  return (
    <div className="flex flex-col max-w-full space-y-3 overflow-x-hidden">
      <div className="flex items-center space-x-3 text-2xl">
        <FaStackOverflow className="text-[#F47F24]" />
        <h3>Tech Stacks</h3>
      </div>
      <CarouselWrapper>
        <IconTrackLeft>
          {toLeft.map(
            (
              iconData,
              i // Use iconData to access name and icon
            ) => (
              <IconBox key={i}>
                {iconData.icon} {/* Render the icon */}
                <Tooltip $position="top">{iconData.name}</Tooltip>
                {/* Pass the name and desired position */}
              </IconBox>
            )
          )}
        </IconTrackLeft>
      </CarouselWrapper>
      <CarouselWrapper>
        <IconTrackRight>
          {toRight.map(
            (
              iconData,
              i // Use iconData to access name and icon
            ) => (
              <IconBox key={`${i}-${iconData.name}`}>
                {iconData.icon} {/* Render the icon */}
                <Tooltip $position="top">{iconData.name}</Tooltip>
                {/* Pass the name and desired position */}
              </IconBox>
            )
          )}
        </IconTrackRight>
      </CarouselWrapper>
    </div>
  );
};
const Contents = () => {
  return (
    <div className="w-full px-3 mx-auto bg-[var(--bgSoft)] rounded-md grid grid-cols-[1fr_3fr_1fr] items-start gap-2">
      {/* Left Sticky Aside */}
      <aside className="sticky rounded top-18 h-fit ">
        <div className="bg-[var(--bg)]  rounded-md">
          <img
            src={profilePic}
            alt="Profile"
            className="object-cover object-[center_40%] w-full mx-auto mb-2 h-60 rounded-t-md"
          />
          <div className="px-4 py-2 text-center">
            <h3 className="text-xl font-semibold text-[var(--textColor)]">
              Kier L. Aguilar
            </h3>
            <h6 className="text-xs text-[var(--textColorSoft)]">
              Full Stack Developer
            </h6>
            <p className="text-justify text-xs text-[var(--textColorSoft)] mt-3">
              I am a Result-driven Full Stack Developer with 3+ years of
              experience building responsive, high-performance web systems.
              Skilled in Laravel, React.js, and full-stack development with a
              solid foundation in MySQL, RESTful APIs, and modern UI frameworks.
              Experienced in both healthcare and ERP applications, focusing on
              scalable architectures, data security, and seamless user
              experiences.
            </p>
          </div>
        </div>
        <div className="px-4 py-2 bg-[var(--bg)] mt-3 rounded-md">
          <div className="flex mb-3 space-x-1 font-bold">
            <MailOutlineIcon />
            <h1>Get in Touch</h1>
          </div>
          <div className="flex items-center justify-around space-x-2 ">
            <LinkedInIcon fontSize="large" />
            <FacebookIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
            <GitHubIcon fontSize="large" />
          </div>
          <p className="text-start text-sm text-[var(--textColorSoft)] mt-2  italic">
            Have an idea or project?
            <br /> Let's bring it to life together.
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <div className="relative flex flex-col space-y-3 ">
        <section>
          <Education />
        </section>
        <section>
          <Experience />
        </section>
        <section>
          <GitHubContributions username={"kraglr"} />
        </section>
      </div>

      {/* Right Aside (empty or future use) */}
      <aside className="bg-[var(--bg)] sticky top-18 h-fit p-2 rounded shadow col-span-1 overflow-x-hidden">
        {" "}
        {/* Add overflow-x-hidden here */}
        <LeftBar />
      </aside>
    </div>
  );
};

export default Contents;
