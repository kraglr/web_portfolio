import { useState } from "react";
import jennie from "../../assets/img/arts/jennie_converted.webp";
import aiah from "../../assets/img/arts/aiah_converted.webp";
import aiah_vector from "../../assets/img/arts/aiah_vector_converted.webp";
import colet from "../../assets/img/arts/colet_converted.webp";
import colet_vector from "../../assets/img/arts/colet_vector_converted.webp";
import jennie_portrait from "../../assets/img/arts/jennie_portrait_converted.webp";
import Jhoanna from "../../assets/img/arts/Jhoanna_converted.webp";
import karina from "../../assets/img/arts/karina_converted.webp";
import maloi from "../../assets/img/arts/maloi_converted.webp";
import mina from "../../assets/img/arts/mina_converted.webp";
import sana from "../../assets/img/arts/sana_converted.webp";
import designproject from "../../assets/img/projects/DesignProject_converted.webp";
import chessapp from "../../assets/img/projects/chessapp_converted.webp";
import tetrisapp from "../../assets/img/projects/tetris_converted.webp";
import ERP from "../../assets/img/projects/ERP_converted.webp";
import krweather from "../../assets/img/projects/krweather_converted.webp";

import LaunchIcon from "@mui/icons-material/Launch";
import AnimatedSection from "../utilities/AnimatedSection";
import GitHubRepos from "./GitHubRepos";

const Project = () => {
  const [projType, setProjType] = useState("All");
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const portfolioItems = [
    {
      src: ERP,
      label: "Custom ERP System for Inventory and Finance",
      category: "Projects",
      description:
        "A comprehensive web-based ERP system developed using React, Node.js, and MySQL. Features include Purchase Requests (PR), Purchase Orders (PO), Goods Receipt (GR), Goods Return (GR), Accounts Payable (AP), Accounts Receivable (AR), and Journal Entries (JE) with integrated stockcard tracking and costing methods.",
    },
    {
      src: designproject,
      label: "Leave Application Management System A.Y.: 2017-2018",
      category: "Projects",
      description:
        "A web-based document filing system developed using native PHP, HTML, CSS, and JavaScript. Built for Sampaloc, Quezon Municipality during A.Y. 2017–2018, this system streamlines the leave application process for municipal employees with a simple and efficient UI.",
    },
    {
      src: krweather,
      label: "KR Weather - Real-Time Forecast App",
      category: "Projects",
      description:
        "A sleek and responsive weather application built with React, Vite, and Tailwind CSS. It uses the OpenWeatherMap API to provide real-time weather data including temperature, humidity, wind speed, and condition icons. Designed for both desktop and mobile users with a modern, glossy UI.",
      site: "https://kraglrweather.netlify.app/",
    },
    {
      src: chessapp,
      label: "Interactive Chess Application",
      category: "Projects",
      description:
        "A browser-based chess app built with React and Vite, styled with Tailwind CSS. Provides real-time gameplay with intuitive UI and responsive design for desktop and mobile users.",
    },
    {
      src: tetrisapp,
      label: "Classic Web Tetris Game",
      category: "Projects",
      description:
        "A Tetris game clone developed using React and Vite, styled with Tailwind CSS. Features smooth animations, responsive controls, and retro-inspired visuals for a nostalgic experience.",
      site: "https://kraglr-tetris.netlify.app/",
    },
    {
      src: jennie,
      label: "Jennie (BLACKPINK) Vexel Art",
      category: "Arts",
      description:
        "A digital vexel art portrait of Jennie from BLACKPINK, highlighting vector-style rendering and layered shading techniques.",
    },
    {
      src: aiah,
      label: "Aiah (BINI) Portrait",
      category: "Arts",
      description:
        "A traditional portrait of Aiah from BINI, hand-drawn using graphite and charcoal pencils to create realistic texture and depth.",
    },
    {
      src: aiah_vector,
      label: "Aiah (BINI) Vexel Art",
      category: "Arts",
      description:
        "Vector-style vexel artwork of Aiah from BINI, focusing on detailed facial structure and vibrant color composition.",
    },
    {
      src: colet,
      label: "Colet (BINI) Portrait",
      category: "Arts",
      description:
        "Traditional pencil portrait of Colet from BINI, rendered using graphite and charcoal with emphasis on soft shadows and contrast.",
    },
    {
      src: colet_vector,
      label: "Colet (BINI) Vexel Art",
      category: "Arts",
      description:
        "A detailed vexel art of Colet from BINI, emphasizing vector-style precision and layered depth.",
    },
    {
      src: jennie_portrait,
      label: "Jennie (BLACKPINK) Portrait",
      category: "Arts",
      description:
        "Hand-drawn graphite and charcoal portrait of Jennie from BLACKPINK, capturing lifelike features and subtle shading.",
    },
    {
      src: Jhoanna,
      label: "Jhoanna (BINI) Portrait",
      category: "Arts",
      description:
        "A graphite and charcoal pencil portrait of Jhoanna from BINI, showcasing expressive eyes and delicate details.",
    },
    {
      src: karina,
      label: "Karina (aespa) Portrait",
      category: "Arts",
      description:
        "Realistic pencil portrait of Karina from aespa, drawn with graphite and charcoal to emphasize strong features and lighting.",
    },
    {
      src: maloi,
      label: "Maloi (BINI) Portrait",
      category: "Arts",
      description:
        "Traditional graphite and charcoal drawing of Maloi from BINI, highlighting refined textures and soft gradients.",
    },
    {
      src: mina,
      label: "Mina (TWICE) Vexel Art",
      category: "Arts",
      description:
        "A vector-style vexel artwork of Mina from TWICE, emphasizing clean lines, color blending, and stylized realism.",
    },
    {
      src: sana,
      label: "Sana (TWICE) Portrait",
      category: "Arts",
      description:
        "A traditional portrait of Sana from TWICE, hand-rendered using graphite and charcoal pencils for smooth gradients and fine detail.",
    },
  ];

  const categories = ["All", "Projects", "Arts"];

  const filteredItems =
    projType === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === projType);

  return (
    <div className="transition-all duration-500 ease-in-out portfolio-container ">
      <div className="grid lg:grid-cols-[4fr_1fr] grid-cols-1 mx-auto gap-2">
        <div className="flex lg:flex-row flex-col items-start col-span-1 bg-[var(--bg)] rounded-md py-5 px-3 gap-x-4 gap-y-5">
          <div className="sticky w-full text-left lg:flex-1 flex-3 lg:top-18 portfolio-nav top-5 ">
            <aside className="items-center justify-between w-full mx-auto align-middle nav">
              <ul className="flex flex-row justify-center w-full lg:justify-between lg:flex-col">
                {categories.map((category) => (
                  <li
                    key={category}
                    className={`cursor-pointer px-3 py-1  transition-color duration-300 ${
                      projType === category
                        ? " text-[var(--textColor)] border-b-3 border-b-[var(--bgHighlight)]"
                        : "hover:bg-[var(--bgSofter)] border-b-0"
                    }`}
                    onClick={() => setProjType(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="portfolio-body flex-3 ">
            <div className="grid grid-cols-1 images-div lg:grid-cols-3 md:grid-cols-2 gap-y-7 gap-x-4">
              {filteredItems.map((item, i) => (
                <AnimatedSection direction="top" key={i}>
                  <div className="col-span-1 img-box">
                    <div className="relative w-full overflow-hidden shadow-md img-container group aspect-square rounded-xl">
                      {!loadedImages[i] && (
                        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-100">
                          <div className="w-6 h-6 border-4 border-gray-600 rounded-full border-t-transparent animate-spin"></div>
                        </div>
                      )}
                      <picture
                        className={`w-full h-full object-cover transition-opacity duration-500 ${
                          loadedImages[i] ? "opacity-100" : "opacity-0"
                        }`}
                        loading="lazy"
                        onLoad={() => handleImageLoad(i)}
                      >
                        <source srcSet={item.src} type="image/webp" />
                        <img
                          src={item.src}
                          alt={item.label}
                          className={`w-full h-full object-cover transition-opacity duration-500 ${
                            loadedImages[i] ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      </picture>
                      {item.description && (
                        <div className="description absolute inset-0 bg-[rgba(0,0,0,0.6)] text-white items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in px-8 py-4 text-center text-[.875rem] cursor-pointer flex flex-col">
                          <span className="text-xs text-justify">
                            {item.description}
                          </span>
                          {item.site && (
                            <a
                              href={item.site}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 mt-1 text-xl hover:underline"
                            >
                              Visit Site
                              <LaunchIcon fontSize="small" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                    <span className="block mt-2 text-center">{item.label}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
        <aside className="sticky col-span-1 bg-[var(--bg)] lg:top-18 rounded-md repo top-5 h-fit">
          <GitHubRepos username="kraglr" />
        </aside>
      </div>
    </div>
  );
};

export default Project;
