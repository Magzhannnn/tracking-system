import { useState } from "react";

export const useNavigate = () => {
  const [activeNav, setActiveNav] = useState(
    localStorage.getItem("activeNav") ?? "timeLine"
  );

  const chooseNav = (nav: string) => {
    setActiveNav(nav);
    localStorage.setItem("activeNav", nav);
  };

  return { activeNav, chooseNav };
};
