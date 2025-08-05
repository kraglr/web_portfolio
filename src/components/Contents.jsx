import React, { useState } from "react";
import AboutMe from "./AboutContent/AboutMe";
import CareerStats from "./Home/CareerStats";
import { Modal } from "flowbite-react";
import { Button } from "flowbite-react";
import GitHubContributions from "./AboutContent/GitHubContributions";
import profilePic from "../assets/img/profile.jpg";
import profileWebp from "../assets/img/profile.webp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FaStackOverflow } from "react-icons/fa";
import vite from "../assets/svg/logo.svg";
import { FaTelegramPlane } from "react-icons/fa";
import MessageModal from "./AboutContent/MessageModal";
import { PiReadCvLogoFill } from "react-icons/pi";
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
import Skills from "./AboutContent/Skills";

import CVModal from "./AboutContent/CVModal";

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
    <div className="flex flex-col max-w-full space-y-3 overflow-x-hidden bg-[var(--bg)] rounded-md p-2">
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
              <IconBox key={`${i}-${iconData.name}`} className="cursor-pointer">
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
              <IconBox key={`${i}-${iconData.name}`} className="cursor-pointer">
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

// const MessageModal = ({ openMessageModal, setOpenMessageModal }) => {
//   return (
//     <Modal show={openMessageModal} onClose={() => setOpenMessageModal(false)}>
//       <Modal.Header>Let's Connect</Modal.Header>
//       <Modal.Body>
//         <p className="text-sm text-gray-600">
//           Feel free to reach out! You can contact me via Telegram, Email, or
//           LinkedIn.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={() => setOpenMessageModal(false)}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

const ProfileCard = ({ setOpenMessageModal, setOpenCVModal }) => {
  const [showMore, setShowMore] = useState(true);

  const fullText = `I am a result-driven Full Stack Developer with 3+ years of experience
  building responsive, high-performance web systems. Skilled in Laravel,
  React.js, and full-stack development with a solid foundation in MySQL,
  RESTful APIs, and modern UI frameworks. Experienced in both healthcare
  and ERP applications, focusing on scalable architectures, data security,
  and seamless user experiences.`;

  const previewText = fullText.split(". ").slice(0, 2).join(". ") + ".";

  return (
    <div className="bg-[var(--bg)] rounded-md lg:grid hidden transition-all duration-300 ease-in-out  ">
      <div
        className="relative p-2 transition-all duration-300 ease-in-out bg-center bg-no-repeat bg-cover rounded-md flex-grow-1 lg:p-0"
        style={{
          backgroundImage: `url(${profilePic})`,
          minHeight: "38rem", // increase height to account for bottom filler
          backgroundColor: "rgba(0,0,0,0.3)",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="absolute backdrop-blur-[2px] rounded-md px-4 py-2 text-center h-full max-h-20 top-4/9 z-2">
          <h3 className="text-2xl font-semibold text-white">Kier L. Aguilar</h3>
          <h6 className="text-sm text-gray-100">Full Stack Developer</h6>
          <p className="mt-3 text-xs text-justify text-gray-300">
            {showMore ? fullText : previewText}
            {/* <button
              onClick={() => setShowMore(!showMore)}
              className="ml-1 text-blue-700 underline transition hover:opacity-80"
              aria-expanded={showMore}
            >
              {showMore ? "Show Less" : "Show More"}
            </button> */}
          </p>
          <div className="grid grid-cols-2 mt-2">
            <div className="flex flex-col col-span-1 border-r-1 border-[var(--border)]">
              <h6 className="font-bold text-green-500">3+</h6>
              <span className="text-[10px] text-gray-300">Experience</span>
            </div>
            {/* <div className="flex flex-col col-span-1 border-r-1 border-[var(--border)]">
              <h6 className="font-bold text-yellow-500">5+</h6>
              <span className="text-[10px] text-[var(--textColorSoft)]">
                Projects
              </span>
            </div> */}
            <div className="flex flex-col col-span-1 ">
              <h6 className="font-bold text-blue-500">19+</h6>
              <span className="text-[10px] text-gray-300">Tech Stacks</span>
            </div>
          </div>
          <div className="flex items-start w-full mt-2 space-x-2 ">
            <button
              className="bg-[var(--textColor)] text-[var(--bg)] px-6 py-2 rounded-full flex items-center space-x-2 w-full justify-center cursor-pointer"
              role="button"
              onClick={() => setOpenMessageModal(true)}
            >
              <FaTelegramPlane />
              <span>Message</span>
            </button>
            <button
              className="px-3 py-2 text-2xl rounded-full bg-[var(--bg)] cursor-pointer"
              onClick={() => setOpenCVModal(true)}
            >
              <PiReadCvLogoFill />
            </button>
          </div>
        </div>
        {/* <div className="w-full h-20 bg-[rgba(0,0,0,0.3)] backdrop-blur-[2px] z-1" /> */}
      </div>
    </div>
  );
};
const Contents = () => {
  const [openMessageModal, setOpenMessageModal] = useState(false);
  const [openCVModal, setOpenCVModal] = useState(false);
  return (
    <>
      <div className="w-full px-3 mx-auto bg-[var(--bgSoft)] rounded-md grid xl:grid-cols-[1fr_3fr_1fr] lg:grid-cols-[1fr_3fr] grid-cols-1 items-start gap-x-2 gap-y-3 transition-all duration-300 ease-in-out">
        {/* Left Sticky Aside */}
        <aside className="relative col-span-1 space-y-3 rounded lg:sticky lg:top-18 h-fit gap-y-3 lg:space-y-3">
          <ProfileCard
            setOpenMessageModal={setOpenMessageModal}
            setOpenCVModal={setOpenCVModal}
          />

          <div className="bg-[var(--bg)]  rounded-md lg:hidden  p-4 flex md:flex-row flex-col transition-all duration-500 ease-in-out">
            <picture>
              {/* The browser will try to load this WebP image first. */}
              <source srcSet={profileWebp} type="image/webp" />
              <img
                src={profilePic}
                alt="Profile"
                className="object-cover object-[center_40%] w-48  border-2 border-[var(--border)]  aspect-square h-48 rounded-full mx-auto my-auto"
              />
            </picture>

            <div className="px-4 py-2 text-center">
              <h3 className="lg:text-xl text-3xl font-semibold text-[var(--textColor)]">
                Kier L. Aguilar
              </h3>
              <h6 className="lg:text-sm text-lg text-[var(--textColor)]">
                Full Stack Developer
              </h6>
              <p className="mt-3 lg:text-xs text-md text-justify text-[var(--textColorSoft)]">
                I am a Result-driven Full Stack Developer with 3+ years of
                experience building responsive, high-performance web systems.
                Skilled in Laravel, React.js, and full-stack development with a
                solid foundation in MySQL, RESTful APIs, and modern UI
                frameworks. Experienced in both healthcare and ERP applications,
                focusing on scalable architectures, data security, and seamless
                user experiences.
              </p>
              <div className="grid grid-cols-2 mt-2">
                <div className="flex flex-col col-span-1 border-r-1 border-[var(--border)]">
                  <h6 className="font-bold text-green-500">3+</h6>
                  <span className="text-[10px] text-[var(--textColor)]">
                    Experience
                  </span>
                </div>
                {/* <div className="flex flex-col col-span-1 border-r-1 border-[var(--border)]">
              <h6 className="font-bold text-yellow-500">5+</h6>
              <span className="text-[10px] text-[var(--textColorSoft)]">
                Projects
              </span>
            </div> */}
                <div className="flex flex-col col-span-1 ">
                  <h6 className="font-bold text-blue-500">19+</h6>
                  <span className="text-[10px] text-[var(--textColor)]">
                    Tech Stacks
                  </span>
                </div>
              </div>
              <div className="flex">
                <button
                  className="bg-[var(--textColor)] text-[var(--bg)] px-6 py-2 rounded-full flex items-center space-x-2 w-full justify-center cursor-pointer mt-3"
                  role="button"
                  onClick={() => setOpenMessageModal(true)}
                >
                  <FaTelegramPlane />
                  <span>Message</span>
                </button>
                <button
                  className="px-3 py-2 text-2xl rounded-full bg-[var(--bg)] cursor-pointer flex items-center align-middle justify-center"
                  onClick={() => setOpenCVModal(true)}
                >
                  <PiReadCvLogoFill />
                </button>
              </div>
            </div>
          </div>

          <div className="px-4 py-2 bg-[var(--bg)]  rounded-md">
            <div className="flex mb-3 space-x-1 font-bold">
              <MailOutlineIcon />
              <h1>Get in Touch</h1>
            </div>
            <div className="flex items-center justify-around space-x-2 ">
              <LinkedInIcon fontSize="medium" className="text-[#0077B5]" />
              <GitHubIcon
                fontSize="medium"
                className="text-[var(--textColor)]"
              />
              <FacebookIcon fontSize="medium" className="text-[#4267B2]" />
              <InstagramIcon fontSize="medium" className="text-[#F77737]" />
            </div>
            <p className="text-start text-xs text-[var(--textColorSoft)] mt-2  italic">
              Have an idea or project? Let's bring it to life together.
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <div className="relative flex flex-col col-span-1 space-y-3 overflow-x-hidden">
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
        <aside className="relative flex flex-col col-span-1 space-y-3 overflow-x-hidden rounded lg:sticky lg:top-18 h-fit xl:col-start-3 lg:col-start-2 ">
          {" "}
          {/* Add overflow-x-hidden here */}
          <LeftBar />
          <Skills />
        </aside>
      </div>
      <MessageModal
        openMessageModal={openMessageModal}
        setOpenMessageModal={setOpenMessageModal}
      />
      <CVModal openCVModal={openCVModal} setOpenCVModal={setOpenCVModal} />
    </>
  );
};

export default Contents;
