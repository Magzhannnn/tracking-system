import { memo } from "react";

interface Props {
  isActive?: boolean;
}

const TableSvg = memo(({ isActive }: Props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
      <g fill={isActive ? "#0052CC" : "#344563"}>
        <path d="M4 18h16.008C20 18 20 6 20 6H3.992C4 6 4 18 4 18zM2 5.994C2 4.893 2.898 4 3.99 4h16.02C21.108 4 22 4.895 22 5.994v12.012A1.997 1.997 0 0120.01 20H3.99A1.994 1.994 0 012 18.006V5.994z"></path>
        <path d="M8 6v12h2V6zm6 0v12h2V6z"></path>
      </g>
    </svg>
  );
});

export default TableSvg;
