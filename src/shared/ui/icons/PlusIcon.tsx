import { cn } from "@shared/lib";
import { defaultSize, type IconProps } from "@shared/ui/icons/common";
import styles from "./icons.module.css";

export function PlusIcon(props: IconProps) {
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
        d="M12 5v14m-7-7h14"
      />
    </svg>
  );
}
