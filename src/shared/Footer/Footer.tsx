import styles from "./styles.module.css";

interface Props {
  title: string;
  text: string;
}

const Footer = ({ title, text }: Props) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.title}>{title}</p>
      <p className={styles.text}>{text}</p>
    </footer>
  );
};

export default Footer;
