import React from "react";
import LandingPage from "../Home/LandingPage";
import CareerStats from "../Home/CareerStats";

const Home = () => {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <LandingPage />
        <CareerStats />
      </div>
    </>
  );
};

export default Home;
