import styles from "./styles.module.css";
import NavigateItem from "../NavigateItem/NavigateItem";
import { INavigate } from "../../models/types";
import { useNavigate } from "../../utils/hooks/useNavigate";

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

  return (
    <nav className={styles.nav}>
      {navigates.map((navigate) => (
        <NavigateItem
          key={navigate.article}
          title={navigate.title}
          article={navigate.article}
          activeNav={activeNav}
          chooseNav={() => chooseNav(navigate.article)}
        />
      ))}
    </nav>
  );
};

export default NavigateList;
