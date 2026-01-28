import { cn } from "@shared/lib";
import { defaultSize, type IconProps } from "@shared/ui/icons/common";
import styles from "./icons.module.css";

export function HomeIcon(props: IconProps) {
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
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="M7.5 17.5v-6.167c0-.466 0-.7.09-.878a.83.83 0 0 1 .365-.364C8.133 10 8.367 10 8.833 10h2.334c.466 0 .7 0 .878.09.157.08.284.208.364.365.091.178.091.412.091.878V17.5M9.181 2.303 3.53 6.7c-.377.294-.566.441-.702.625-.12.163-.21.347-.265.542-.062.22-.062.46-.062.938v6.03c0 .933 0 1.4.182 1.756.16.314.414.569.728.728.357.182.823.182 1.757.182h9.666c.934 0 1.4 0 1.757-.182.314-.16.569-.414.728-.728.182-.357.182-.823.182-1.757V8.804c0-.478 0-.718-.062-.938a1.7 1.7 0 0 0-.265-.542c-.136-.184-.325-.33-.702-.625l-5.652-4.396c-.293-.227-.44-.341-.601-.385a.83.83 0 0 0-.436 0c-.161.044-.308.158-.6.385"
      />
    </svg>
  );
}
