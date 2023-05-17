import Link from "next/link";

import styles from "./Eyebrow.module.css";
const Eyebrow = ({
  isLinkShown,
  linkText,
  linkHref,
  eyebrowText,
  titleText,
  paragraphText,
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <p className="eyebrows">{eyebrowText}</p>
        <h2>{titleText}</h2>
        <p>{paragraphText}</p>
      </div>
      {isLinkShown ? (
        <Link className="navLink" href={linkHref}>
          {linkText}
        </Link>
      ) : undefined}
    </div>
  );
};

export default Eyebrow;
