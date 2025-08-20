import { createContext, useState, useEffect, useContext } from "react";

const DeviceContext = createContext();

export const DeviceContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
      const width = window.innerWidth;

      const mobile = width <= 425; // Phones
      const tablet = width > 425 && width <= 1024; // Tablets
      const mobileOrTablet = mobile || tablet;

      setIsMobile(mobile);
      setIsTablet(tablet);
      setIsMobileOrTablet(mobileOrTablet);
      setIsTouch(isTouchDevice);
    };

    checkDevice();

    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <DeviceContext.Provider
      value={{
        isMobile,
        isTablet,
        isMobileOrTablet,
        isTouch,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};

export const useDevice = () => useContext(DeviceContext);
