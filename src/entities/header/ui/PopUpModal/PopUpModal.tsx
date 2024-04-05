import styles from "./styles.module.css";

interface Props {
  top: number;
  left: number;
  activeHeader: string;
}

const PopUpModal = ({ top, left, activeHeader }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    const urlArr = window.location.href.split("/");
    const activeHeaderArr = activeHeader.split("_");
    urlArr[3] = activeHeaderArr[activeHeaderArr.length - 1];
    window.location.href = urlArr.join("/");
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
