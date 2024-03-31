import { usePopUp } from "@/app/providers/PopUpContext";
import HeaderItem from "../HeaderItem/HeaderItem";
import styles from "./styles.module.css";
import { IHeader, PopUpModal } from "@/entities/header";

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

const HeaderList = () => {
  const { activeNav, openPopUp, popUpInfo } = usePopUp();

  return (
    <nav className={styles.nav}>
      {headers.map((header) => (
        <HeaderItem
          key={header.article}
          title={header.title}
          article={header.article}
          activeNav={activeNav}
          openPopUp={() => openPopUp(`nav_item_${header.article}`)}
        />
      ))}
      {popUpInfo.isActive && (
        <PopUpModal top={popUpInfo.top} left={popUpInfo.left} />
      )}
    </nav>
  );
};

export default HeaderList;
