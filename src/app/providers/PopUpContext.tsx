import {
  defaultPopUpInfo,
  openPopUpWindow,
} from "@/entities/header/helpers/openPopUpWindow";
import { IPopUpInfo } from "@/entities/header/models/types";
import { createContext, useContext, useState } from "react";

export interface IPopUpContext {
  activeNav: string;
  popUpInfo: IPopUpInfo;
  openPopUp: (id: string) => void;
}

export const PopUpContext = createContext<IPopUpContext | undefined>(undefined);

export const usePopUp = () => {
  const context = useContext(PopUpContext);

  if (!context) {
    throw new Error("context error");
  }

  return context;
};

interface ProviderProps {
  children: React.ReactNode;
}

export const PopUpProvider = ({ children }: ProviderProps) => {
  const [activeNav, setActiveNav] = useState("");
  const [popUpInfo, setPopUpInfo] = useState<IPopUpInfo>({
    top: 0,
    left: 0,
    isActive: false,
  });

  const openPopUp = (id = "") => {
    if (id === activeNav) {
      assingValue("", defaultPopUpInfo());
      return;
    }

    assingValue(id, openPopUpWindow(id));
  };

  const assingValue = (id: string, popUpInfo: IPopUpInfo) => {
    setActiveNav(id);
    setPopUpInfo(popUpInfo);
  };

  window.addEventListener("click", () => {
    assingValue("", defaultPopUpInfo());
  });

  return (
    <PopUpContext.Provider value={{ activeNav, popUpInfo, openPopUp }}>
      {children}
    </PopUpContext.Provider>
  );
};
