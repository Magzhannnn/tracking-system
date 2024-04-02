import {
  defaultPopUpInfo,
  openPopUpWindow,
} from "@/entities/header/helpers/openPopUpWindow";
import { IPopUpInfo } from "@/entities/header/models/types";
import { createContext, useContext, useState } from "react";

export interface IPopUpContext {
  activeNav: string;
  activeHeader: string;
  popUpInfo: IPopUpInfo;
  isSelectHeaderInput: boolean;
  chooseNav: (nav: string) => void;
  openPopUp: (id: string) => void;
  onSelectHeaderInput: () => void;     
}

export const mainContext = createContext<IPopUpContext | undefined>(undefined);

export const useMainContext = () => {
  const context = useContext(mainContext);

  if (!context) {
    throw new Error("context error");
  }

  return context;
};

interface ProviderProps {
  children: React.ReactNode;
}

export const MainProvider = ({ children }: ProviderProps) => {
  const [isSelectHeaderInput, setIsSelectHeaderInput] = useState(false);

  const [activeHeader, setActiveHeader] = useState("");

  const [activeNav, setActiveNav] = useState(
    localStorage.getItem("activeNav") ?? "timeLine"
  );

  const [popUpInfo, setPopUpInfo] = useState<IPopUpInfo>({
    top: 0,
    left: 0,
    isActive: false,
  });

  const chooseNav = (nav: string) => {
    setActiveNav(nav);
    localStorage.setItem("activeNav", nav);
  };

  const openPopUp = (id = "") => {
    if (id === activeHeader) {
      assingValue("", defaultPopUpInfo(), false);
      return;
    }

    assingValue(id, openPopUpWindow(id), false);
  };

  const assingValue = (
    id: string,
    popUpInfo: IPopUpInfo,
    isSelectInput: boolean
  ) => {
    setActiveHeader(id);
    setPopUpInfo(popUpInfo);
    setIsSelectHeaderInput(isSelectInput);
  };

  window.addEventListener("click", () => {
    if (activeHeader.length > 0 || isSelectHeaderInput)
      assingValue("", defaultPopUpInfo(), false);
  });

  const onSelectHeaderInput = () => {
    assingValue("", defaultPopUpInfo(), true);
  };

  return (
    <mainContext.Provider
      value={{
        activeHeader,
        popUpInfo,
        openPopUp,
        activeNav,
        chooseNav,
        isSelectHeaderInput,
        onSelectHeaderInput,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};
