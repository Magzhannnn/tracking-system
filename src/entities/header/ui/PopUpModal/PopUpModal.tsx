import styles from "./styles.module.css";

interface Props {
  top: number;
  left: number;
}

const PopUpModal = ({ top, left }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className={styles.popUp}
      style={{ top, left }}
      onClick={handleClick}
    ></div>
  );
};

export default PopUpModal;
