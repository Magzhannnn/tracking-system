import { useMainContext } from "@/app/providers/mainContext";
import HeaderItem from "../HeaderItem/HeaderItem";
import styles from "./styles.module.css";
import { IHeader, PopUpModal } from "@/entities/header";
import { memo } from "react";

const headers: IHeader[] = [
  {
    title: "Ваша работа",
    article: "works",
  },
  {
    title: "Проекты",
    article: "projects",
  },
  {
    title: "Фильтры",
    article: "filters",
  },
  {
    title: "Команды",
    article: "teams",
  },
  {
    title: "Приложения",
    article: "apps",
  },
];

const HeaderList = memo(() => {
  const { activeHeader, openPopUp, popUpInfo } = useMainContext();

  return (
    <nav className={styles.nav}>
      {headers.map((header) => (
        <HeaderItem
          key={header.article}
          title={header.title}
          article={header.article}
          activeHeader={activeHeader}
          openPopUp={() => openPopUp(`nav_item_${header.article}`)}
        />
      ))}
      {popUpInfo.isActive && (
        <PopUpModal
          activeHeader={activeHeader}
          top={popUpInfo.top}
          left={popUpInfo.left}
        />
      )}
    </nav>
  );
});

export default HeaderList;
