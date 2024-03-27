import styles from "./styles.module.css";
import { INavigate } from "../../models/types";
import { useNavigate } from "../../utils/hooks/useNavigate";
import NavigateItem from "../NavigateItem/NavigateItem";
import { useCallback, useEffect } from "react";

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
  const { activeNav, chooseNav } = useNavigate();

  useEffect(() => {
    console.log(activeNav);
  }, [activeNav]);

  const handleClick = useCallback((article: string) => {
    chooseNav(`nav_item_${article}`);
  }, []);

  return (
    <nav className={styles.nav}>
      {navigates.map((navigate) => (
        <NavigateItem
          key={navigate.article}
          title={navigate.title}
          article={navigate.article}
          activeNav={activeNav}
          chooseNav={() => handleClick(navigate.article)}
        />
      ))}
    </nav>
  );
};

export default NavigateList;
