import styles from "./styles.module.css";

interface Props {
  top: number;
  left: number;
}

const PopUpModal = ({ top, left }: Props) => {
  return <div className={styles.popUp} style={{ top, left }}></div>;
};

export default PopUpModal;
