import React from "react";
import { ImProfile } from "react-icons/im";
import onedoc from "../../assets/svg/1doc.jpg";
import tgn from "../../assets/svg/tgn.jpg";
import rj from "../../assets/svg/rj.png";
const Experience = () => {
  const experience = [
    {
      title: "Senior Developer & Supervisor",
      company: "One Document Corporation",
      period: "2025 - Present",
      img: onedoc,
      duties: [
        "Architected modular systems for ERP and EHR platforms using Laravel and React.",
        "Oversaw API integration and database optimization to support growing datasets and users.",
        "Conducted code reviews, mentoring junior developers and enforcing clean code standards.",
        "Collaborated with stakeholders to define project scope and timelines, ensuring timely delivery.",
      ],
    },
    {
      title: "Junior Developer",
      company: "One Document Corporation",
      period: "2022 - 2024",
      img: onedoc,
      duties: [
        "Developed and maintained responsive web apps focused on healthcare workflows.",
        "Optimized SQL queries and implemented REST/SOAP API integrations.",
        "Built reusable React components and participated in UI/UX reviews.",
        "Collaborated with senior developers during planning, development, and code reviews.",
      ],
    },
    {
      title: "Researcher",
      company: "That's Great News",
      period: "2021 - 2022",
      img: tgn,
      duties: [
        "Generated leads from published content and managed publication tracking.",
        "Maintained high accuracy under daily quota pressure across multiple data channels.",
      ],
    },
    {
      title: "Technical Support (Intern)",
      company: "RJ Globus Solutions",
      period: "2018",
      img: rj,
      duties: [
        "Provided first-level support for desktop, network, and printing issues.",
        "Guided employees on basic troubleshooting and helped resolve service tickets.",
      ],
    },
  ];
  return (
    <div className="p-4 rounded-md mx-auto  bg-[var(--bg)] ">
      <div className="flex items-center gap-4 mb-4 text-[var(--textColor)]">
        {/* showStickyNav ? "fixed top-0 left-1/2 -translate-x-1/2 translate-y-0
        opacity-100 w-full grid-cols-[1fr_3fr_1fr]" : "fixed bottom-0 left-1/2
        -translate-x-1/2 translate-y-2 opacity-95 w-[90%] grid-cols-[3fr_1fr]"
        }`} */}
        <div className="flex items-center w-16 h-16 rounded-full bg-[var(--bgSoft)] justify-center text-xl">
          <ImProfile fontSize="large" className="text-[var(--textColor)]" />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold">Professional Experience</h1>
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        {experience.map((exp, idx) => {
          return (
            <div
              key={idx}
              className="grid grid-cols-[1fr_7fr] gap-x-5 border-t-1 border-[var(--border)] items-center "
            >
              <img src={exp.img} alt="" />
              <div className="col-span-1">
                <h1 className="text-[var(--textColor)] font-bold text-xl">
                  {exp.title}
                </h1>
                <h3 className="text-[var(--textColor)]  text-md">
                  {exp.company}
                </h3>
                <div className="flex text-[var(--textColorSoft)] items-center space-x-4">
                  <span className="text-xs">{exp.period}</span>
                </div>
                <ul className="list-disc">
                  {exp.duties.map((item, itemidx) => {
                    return (
                      <li className="ml-5" key={`${itemidx}-${item}`}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
