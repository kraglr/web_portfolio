import React from "react";

import profilePic from "../../assets/img/profile.jpg";
import LandingPage from "../Home/LandingPage";

const Profile = () => {
  return (
    <div className="bg-[var(--bg)] text-[var(--textColor)] h-full w-full flex flex-col items-center">
      {/* Cover and LandingPage */}
      <div className="relative w-full h-full mx-auto my-auto">
        <LandingPage />
        {/* Profile Picture + Info */}
        <div className="absolute xl:left-20 lg:left-10 z-20 hidden w-[90%] h-40 px-6 space-x-2 lg:flex -bottom-30">
          <img
            src={profilePic}
            alt="profile"
            className="object-cover w-40 mx-auto border-4 border-white rounded-full aspect-square"
          />
          <div className="flex flex-row justify-between items-center w-[calc(100%-160px)] h-full ml-4">
            <div className="flex flex-col justify-center">
              <h1 className="mt-3 text-4xl font-semibold">Kier Luna Aguilar</h1>
              <h3 className="text-[var(--textColorSoft)]">
                Full Stack Developer
              </h3>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-[whitesmoke] bg-blue-950  rounded-md cursor-pointer">
                View My Work
              </button>
              <button className="px-4 py-2 bg-[var(--bgSoft)] text-[var(--textColor)] rounded-md cursor-pointer">
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-0 lg:h-40" />
    </div>
  );
};

export default Profile;
