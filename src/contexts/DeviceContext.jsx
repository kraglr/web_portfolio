import React, { createContext, useState, useEffect, useContext } from "react";

const DeviceContext = createContext();

export const DeviceContextProvider = ({ children }) => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkIfMobileOrTablet = () => {
      // This logic combines touch capability and screen width, which is a robust way
      // to detect mobile/tablet devices.
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      const isSmallScreen = window.matchMedia("(max-width: 1024px)").matches;
      setIsMobileOrTablet(isTouch || isSmallScreen);
      setIsTouch(isTouch);
    };

    // Initial check on component mount
    checkIfMobileOrTablet();

    // Add event listener for window resize and clean up on unmount
    window.addEventListener("resize", checkIfMobileOrTablet);
    return () => window.removeEventListener("resize", checkIfMobileOrTablet);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <DeviceContext.Provider value={{ isMobileOrTablet, isTouch }}>
      {children}
    </DeviceContext.Provider>
  );
};

// Custom hook for easy consumption of the context
export const useDevice = () => useContext(DeviceContext);
