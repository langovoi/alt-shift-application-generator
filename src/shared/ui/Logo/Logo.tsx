import Image from "next/image";
import styles from "./Logo.module.css";
import logoSrc from "./logo.svg";

export function Logo() {
  return (
    <Image
      src={logoSrc}
      className={styles.logo}
      alt="Alt+Shift"
      title="Alt+Shift"
      loading="eager"
    />
  );
}
