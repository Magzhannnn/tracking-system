import { HeaderInfo, NavigateList } from "@/features/header";
import styles from "./styles.module.css";

const Header = () => {

  return (
    <header className={styles.header}>
      <HeaderInfo />
      <NavigateList />
    </header>
  );
};

export default Header;
