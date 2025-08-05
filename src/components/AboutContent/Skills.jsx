import React from "react";
import Slider from "react-slick";
// import "./skills.scss"; // Your custom SCSS
import "slick-carousel/slick/slick.css"; // Slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Slick carousel theme CSS
import { GiSkills } from "react-icons/gi";
import {
  FaReact,
  FaNodeJs,
  // FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  // FaPhp,
} from "react-icons/fa";
import {
  SiMysql,
  // SiPostman,
  SiBootstrap,
  SiTailwindcss,
  // SiExpress,
  // SiSass,
  SiLaravel,
  // SiSelenium,
  // SiApache,
  // SiMongodb,
  // SiLivewire,
} from "react-icons/si";
const Skills = () => {
  // Helper function to render stars based on a rating out of 5
  // The 'rating' parameter should be a number from 0 to 5 (e.g., 4.5 for 4 and a half stars)
  const renderStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating); // Number of full stars
    const hasHalfStar = rating - fullStars >= 0.5; // Check for a half star (0.5 or more of a star)

    const stars = [];

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className="inline-block w-6 h-6 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.927 8.71c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      );
    }

    // Render half star if applicable
    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className="inline-block w-6 h-6 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="halfGradient">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#halfGradient)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.927 8.71c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"
          />
        </svg>
      );
    }

    // Render empty stars
    const remainingStars = totalStars - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <svg
          key={`empty-${i}`}
          className="inline-block w-6 h-6 text-[var(--bg)]"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.927 8.71c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      );
    }

    return <div className="flex items-center justify-start">{stars}</div>;
  };

  // React Slick settings
  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Loop the carousel
    speed: 500, // Transition speed
    // slidesToShow: 2, // Show 4 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Auto-play the carousel
    autoplaySpeed: 2000, // Auto-play speed in milliseconds
    arrows: false,
    responsive: [
      {
        breakpoint: 2000, // For screens larger than 1200px (xl)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1280, // For screens larger than 1200px (xl)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200, // For screens larger than 1200px (xl)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992, // For screens larger than 992px (lg)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For screens larger than 768px (md)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // For screens smaller than 576px (sm)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // An array of your skill data to easily map over
  const skillsData = [
    {
      icon: <FaHtml5 className="text-[#E34F26] text-4xl" />,
      name: "HTML5",
      description:
        "Proficient in creating well-structured, semantic, and accessible web content using the latest HTML5 standards.",
      rating: 4.5,
    },
    {
      icon: <FaCss3Alt className="text-[#1572B6] text-4xl" />,
      name: "CSS3",
      description:
        "Skilled in crafting visually appealing and responsive layouts using modern CSS techniques, including Flexbox, Grid, and animations.",
      rating: 4.75,
    },
    {
      icon: <FaJs className="text-[#F7DF1E] text-4xl" />,
      name: "JavaScript",
      description:
        "Comprehensive understanding of JavaScript (ES6+) for dynamic client-side scripting, interactive web features, and asynchronous operations.",
      rating: 4.0,
    },
    {
      icon: <SiMysql className="text-[#00758F] text-4xl" />,
      name: "MySQL",
      description:
        "Solid experience in designing, querying, and managing relational databases using SQL for efficient data retrieval and manipulation.",
      rating: 4.0,
    },
    {
      icon: <FaReact className="text-[#61DAFB] text-4xl" />,
      name: "React",
      description:
        "Expertise in building scalable, interactive, and high-performance user interfaces with modern React.js practices and component-based architecture.",
      rating: 4.0,
    },
    {
      icon: <FaNodeJs className="text-[#339933] text-4xl" />,
      name: "Node.js",
      description:
        "Proficient in server-side development, building robust RESTful APIs, and handling data persistence with Node.js and related frameworks like Express.",
      rating: 4.0,
    },
    {
      icon: <SiBootstrap className="text-[#7952B3] text-4xl" />,
      name: "Bootstrap",
      description:
        "Experienced in using Bootstrap for rapid development of responsive, mobile-first web projects with pre-built components and styling.",
      rating: 4.7,
    },
    {
      icon: <SiTailwindcss className="text-[#06B6D4] text-4xl" />,
      name: "Tailwind CSS",
      description:
        "A utility-first CSS framework for rapid UI development and highly customizable designs, ensuring responsive and consistent styling.",
      rating: 4.0,
    },
    {
      icon: <SiLaravel className="text-[#FF2D20] text-4xl" />,
      name: "Laravel",
      description:
        "Adept at building robust, secure, and scalable web applications using the Laravel PHP framework and its rich ecosystem.",
      rating: 4.6,
    },
  ];

  return (
    <div className="w-full mx-auto transition-all duration-500 ease-in-out bg-[var(--bg)] rounded-md ">
      <div className="flex items-center p-2 space-x-3 text-2xl">
        <GiSkills className="text-yellow-400" />
        <h3>Skill Ratings</h3>
      </div>
      <div className="w-full mx-auto">
        <Slider {...settings}>
          {skillsData.map((skill, index) => (
            <div key={index} className="flex h-full px-2 py-2">
              <div className="px-4 py-6 rounded-xs skill-box border-1 border-[var(--border)] bg-[var(--bgSoft)] flex flex-col justify-between w-full min-h-[250px] cursor-pointer">
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-3 space-x-3 align-middle">
                    {skill.icon}
                    <h3 className="mb-2 text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <p className="flex-grow mb-4 text-sm text-justify">
                    {skill.description}
                  </p>
                  <div className="grid grid-cols-4">
                    <div className="order-1 col-span-1">
                      <span className="block mb-2 text-lg text-right font-small">
                        {skill.rating}/5
                      </span>
                    </div>
                    <div className="col-span-3 order-0">
                      {renderStars(skill.rating)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Skills;
