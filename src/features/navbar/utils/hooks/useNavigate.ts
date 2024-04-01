import { useState } from "react";

export const useNavigate = () => {
  const [isShow, setIsShow] = useState(
    JSON.parse(localStorage.getItem("isShow") ?? "true")
  );
  const [activeNav, setActiveNav] = useState(
    localStorage.getItem("activeNav") ?? "timeLine"
  );

  const chooseNav = (nav: string) => {
    setActiveNav(nav);
    localStorage.setItem("activeNav", nav);
  };

  const showNavClick = () => {
    localStorage.setItem("isShow", JSON.stringify(!isShow));
    setIsShow(!isShow);
  };

  return { isShow, activeNav, chooseNav, showNavClick };
};
