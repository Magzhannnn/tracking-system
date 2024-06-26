import { HeaderInfo, HeaderList } from "@/features/header";
import HeaderInput from "@/features/header/ui/HeaderInput/HeaderInput";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [currentUrl, setCurrentUrl] = useState(window.location.pathname);

  useEffect(() => {
    const handleUrlChange = () => {
      setCurrentUrl(window.location.pathname);
    };

    window.addEventListener("popstate", handleUrlChange);

    return () => {
      window.removeEventListener("popstate", handleUrlChange);
    };
  }, []);

  console.log("data");

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <HeaderInfo />
        <HeaderList />
      </div>
      <HeaderInput />
    </header>
  );
};

export default Header;
