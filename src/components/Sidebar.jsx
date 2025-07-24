import React from "react";
// import Profile from "./Profile/Profile";
import profile from "../assets/img/profile.jpg";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const sideNavs = [
    {
      key: "profile",
      label: "Kier Aguilar",
      img: profile,
      type: "img",
      link: "/about",
    },
  ];
  return (
    <>
      <div className="flex flex-col mt-3">
        <ul className="list-none">
          {sideNavs.map((nav, idx) => {
            return (
              <li key={idx} className="flex px-2 py-0">
                <a
                  onClick={() => navigate(nav.link)}
                  className="flex items-center px-4 py-2 space-x-4 rounded-md cursor-pointer hover:bg-[var(--bgSoft)] w-full"
                >
                  <span>
                    <img
                      src={nav.img}
                      alt=""
                      className="object-cover w-10 h-10 rounded-full"
                    />
                  </span>
                  <span>{nav.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
        {/* <div className="flex items-center justify-start space-x-4 align-middle bg-[var(--bg)] p-4 ">
          <img
            src={profile}
            alt="profile picture"
            className="object-cover w-10 h-10 rounded-full border-2 border-[var(--border)] "
          />
          <h2 className="text-lg font-bold">Kier L. Aguilar</h2>
        </div> */}
      </div>
    </>
  );
};

export default Sidebar;
