import { useState } from "react";

export const useNavigate = () => {
  const [activeNav, setActiveNav] = useState(
    localStorage.getItem("activeNav") ?? "projects"
  );

  const chooseNav = (title: string) => {
    if (title === activeNav) return;

    setActiveNav(title);
    localStorage.setItem("activeNav", title);
  };

  return { activeNav, chooseNav };
};
