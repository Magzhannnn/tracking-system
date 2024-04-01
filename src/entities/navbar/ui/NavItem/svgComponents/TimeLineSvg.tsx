import { memo } from "react";

interface Props {
  isActive?: boolean;
}

const TimeLineSvg = memo(({ isActive }: Props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M6 2h10a3 3 0 010 6H6a3 3 0 110-6zm0 2a1 1 0 100 2h10a1 1 0 000-2H6zm4 5h8a3 3 0 010 6h-8a3 3 0 010-6zm0 2a1 1 0 000 2h8a1 1 0 000-2h-8zm-4 5h6a3 3 0 010 6H6a3 3 0 010-6zm0 2a1 1 0 000 2h6a1 1 0 000-2H6z"
        fill={isActive ? "#0052CC" : "#344563"}
      ></path>
    </svg>
  );
});

export default TimeLineSvg;
