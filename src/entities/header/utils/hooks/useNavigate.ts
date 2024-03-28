import { useState } from "react";
import {
  defaultPopUpInfo,
  openPopUpWindow,
} from "../../helpers/openPopUpWindow";
import { IPopUpInfo } from "../../models/types";

export const useNavigate = () => {
  const [activeNav, setActiveNav] = useState("");
  const [popUpInfo, setPopUpInfo] = useState<IPopUpInfo>({
    top: 0,
    left: 0,
    isActive: false,
  });

  const chooseNav = (id = "") => {
    console.log(id);
    
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

  return { activeNav, chooseNav, popUpInfo };
};
