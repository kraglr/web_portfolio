import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import profile from "../../assets/img/profile.jpg";
const AboutMe = () => {
  return (
    <>
      <div className="flex flex-col bg-[var(--bg)]  mx-auto  px-6 py-6 space-y-8 text-[var(--textColor)] h-full">
        <div className="flex items-center gap-4">
          <div className="rounded-full w-20 h-20 bg-[var(--bgSofter)] flex items-center justify-center shadow-md">
            <img
              src={profile}
              alt=""
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold">Kier L. Aguilar</h1>
            <span className="text-sm text-gray-400">Full Stack Developer</span>
          </div>
        </div>
        <p>
          Results-driven Web Developer with 3+ years of experience building
          responsive, high-performance web systems. Skilled in Laravel,
          React.js, and full-stack development with a solid foundation in MySQL,
          RESTful APIs, and modern UI frameworks. Experienced in both healthcare
          and ERP applications, focusing on scalable architectures, data
          security, and seamless user experiences.
        </p>
        <div className="grid grid-cols-2 gap-x-4">
          <div className="grid grid-cols-1 col-span-1 gap-3">
            <div className="flex flex-row items-start justify-start col-span-1 space-x-4 ">
              <h3 className="text-[var(--textColorSoft)] font-bold flex-1">
                Name:
              </h3>
              <h3 className="text-[var(--textColor)]  flex-1">
                Kier L. Aguilar{" "}
              </h3>
            </div>
            <div className="flex flex-row items-start justify-start space-x-4 col-h3-1 ">
              <h3 className="text-[var(--textColorSoft)] font-bold flex-1">
                Age:
              </h3>
              <h3 className="text-[var(--textColor)]  flex-1">27 Years</h3>
            </div>
            <div className="flex flex-row items-start justify-start space-x-4 col-h3-1 ">
              <h3 className="text-[var(--textColorSoft)] font-bold flex-1">
                Occupation:
              </h3>
              <h3 className="text-[var(--textColor)]  flex-1">Sr. Developer</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 col-h3-1">
            <div className="flex flex-row items-start justify-start space-x-4 col-h3-1 ">
              <h3 className="text-[var(--textColorSoft)] font-bold flex-1">
                Phone:
              </h3>
              <h3 className="text-[var(--textColor)]  flex-1">+639606023995</h3>
            </div>
            <div className="flex flex-row items-start justify-start space-x-4 col-h3-1 ">
              <h3 className="text-[var(--textColorSoft)] font-bold flex-1">
                Email:
              </h3>
              <h3 className="text-[var(--textColor)]  flex-1">
                aguilarkier25@gmail.com
              </h3>
            </div>
            <div className="flex flex-row items-start justify-start space-x-4 col-h3-1 ">
              <h3 className="text-[var(--textColorSoft)] font-bold flex-1">
                Nationality:
              </h3>
              <h3 className="text-[var(--textColor)]  flex-1">Filipino </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
