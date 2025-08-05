import React from "react";
import GitHubContributions from "./AboutContent/GitHubContributions";
import Project from "./PortfolioContent/Project";

const Portfolio = () => {
  return (
    <div className="w-full px-3 mx-auto bg-[var(--bgSoft)] rounded-md grid  items-start gap-x-2 gap-y-3 transition-all duration-300 ease-in-out">
      <section className="flex flex-col space-y-3">
        <Project />
      </section>
    </div>
  );
};

export default Portfolio;
