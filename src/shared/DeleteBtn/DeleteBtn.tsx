import styles from "./styles.module.css";

interface Props {
  onDelete: () => void;
}

const DeleteBtn = ({ onDelete }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      role="presentation"
      onClick={onDelete}
      className="cursor-pointer"
    >
      <g fillRule="evenodd">
        <circle fill="#344563" cx="12" cy="12" r="9"></circle>
        <path
          d="M16.155 14.493a1.174 1.174 0 11-1.662 1.663L12 13.662l-2.494 2.494a1.172 1.172 0 01-1.662 0 1.176 1.176 0 010-1.663L10.337 12 7.844 9.507a1.176 1.176 0 011.662-1.662L12 10.338l2.493-2.493a1.174 1.174 0 111.662 1.662L13.662 12l2.493 2.493z"
          fill="#fff"
        ></path>
      </g>
    </svg>
  );
};

export default DeleteBtn;
