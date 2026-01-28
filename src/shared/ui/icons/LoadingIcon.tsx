import { cn } from "@shared/lib";
import { defaultSize, type IconProps } from "@shared/ui/icons/common";
import styles from "./icons.module.css";

export function LoadingIcon(props: IconProps) {
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
        d="M12 2v4m0 12v4M6 12H2m20 0h-4m1.078 7.078L16.25 16.25M19.078 5 16.25 7.828M4.922 19.078 7.75 16.25M4.922 5 7.75 7.828"
      />
    </svg>
  );
}
