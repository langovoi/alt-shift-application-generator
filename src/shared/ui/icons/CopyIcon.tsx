import { cn } from "@shared/lib";
import { defaultSize, type IconProps } from "@shared/ui/icons/common";
import styles from "./icons.module.css";

export function CopyIcon(props: IconProps) {
  const className = cn(
    styles.icon,
    styles[props.size || defaultSize],
    props.className,
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      className={className}
    >
      <g clipPath="url(#a)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.67"
          d="M6.67 6.67V4.33c0-.93 0-1.4.18-1.75q.25-.49.73-.73c.35-.18.82-.18 1.75-.18h6.34c.93 0 1.4 0 1.75.18q.48.24.73.73c.18.35.18.82.18 1.75v6.34c0 .93 0 1.4-.18 1.75q-.25.49-.73.73c-.35.18-.82.18-1.75.18h-2.34m-9 5h6.34c.93 0 1.4 0 1.75-.18q.49-.25.73-.73c.18-.35.18-.82.18-1.75V9.33c0-.93 0-1.4-.18-1.75a1.7 1.7 0 0 0-.73-.73c-.35-.18-.82-.18-1.75-.18H4.33c-.93 0-1.4 0-1.75.18q-.48.25-.73.73c-.18.35-.18.82-.18 1.75v6.34c0 .93 0 1.4.18 1.75q.25.48.73.73c.35.18.82.18 1.75.18"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
