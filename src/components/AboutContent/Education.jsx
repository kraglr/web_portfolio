import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import slsu from "../../assets/svg/slsu.png";
const Education = () => {
  return (
    <div className="p-4 rounded-md mx-auto  bg-[var(--bg)] ">
      <div className="flex items-center gap-4 mb-4 text-[var(--textColor)]">
        {/* showStickyNav ? "fixed top-0 left-1/2 -translate-x-1/2 translate-y-0
        opacity-100 w-full grid-cols-[1fr_3fr_1fr]" : "fixed bottom-0 left-1/2
        -translate-x-1/2 translate-y-2 opacity-95 w-[90%] grid-cols-[3fr_1fr]"
        }`} */}
        <div className="flex items-center w-16 h-16 rounded-full bg-[var(--bgSoft)] justify-center text-xl">
          <SchoolIcon fontSize="large" className="text-[var(--textColor)]" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold">Educations</h1>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_7fr] gap-x-3 border-t-1 border-[var(--border)] pt-2">
        <img src={slsu} alt="" />
        <div className="col-span-1">
          <h1 className="text-[var(--textColor)] font-bold text-xl">
            Bachelor of Science in Computer Engineering
          </h1>
          <h3 className="text-[var(--textColor)]  text-md">
            Southern Luzon State University
          </h3>
          <div className="flex text-[var(--textColorSoft)] items-center space-x-4">
            <span className="text-xs">A.Y. 2014-2019</span>
          </div>
          <p className="mt-3 text-[var(--textColor)]">
            Completed a comprehensive curriculum in software development,
            hardware design, and network systems. Relevant courses include:
            Engineering Management, System Analysis & Design, Operating Systems,
            Object-Oriented Programming, Data Structures & Algorithms, Database
            Systems, Computer Networks, and Professional Electives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
