import { cn } from "@shared/lib";
import { defaultSize, type IconProps } from "@shared/ui/icons/common";
import styles from "./icons.module.css";

export function RepeatIcon(props: IconProps) {
  const className = cn(
    styles.icon,
    styles[props.size || defaultSize],
    props.className,
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m13 22-3-3m0 0 3-3m-3 3h5a7 7 0 0 0 3-13.326M6 18.326A7 7 0 0 1 9 5h5m0 0-3-3m3 3-3 3"
      />
    </svg>
  );
}
