import { HeaderInfo } from "@/features/header";
import styles from "./styles.module.css";
import { NavigateList } from "@/features/navigate";

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderInfo />
      <NavigateList />
    </header>
  );
};

export default Header;
