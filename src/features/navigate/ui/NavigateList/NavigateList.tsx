import NavigateItem from "../NavigateItem/NavigateItem";
import styles from "./styles.module.css";
import { INavigate, PopUpModal, useNavigate } from "@/entities/header";

const navigates: INavigate[] = [
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

const NavigateList = () => {
  const { activeNav, chooseNav, popUpInfo } = useNavigate();

  return (
    <nav className={styles.nav}>
      {navigates.map((navigate) => (
        <NavigateItem
          key={navigate.article}
          title={navigate.title}
          article={navigate.article}
          activeNav={activeNav}
          chooseNav={() => chooseNav(`nav_item_${navigate.article}`)}
        />
      ))}
      {popUpInfo.isActive && (
        <PopUpModal top={popUpInfo.top} left={popUpInfo.left} />
      )}
    </nav>
  );
};

export default NavigateList;
