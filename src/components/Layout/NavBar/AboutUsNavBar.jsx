import { useRouter } from "next/router";

import { ABOUT_US_NAVBAR_DATA } from "@/data/LinksData/links";

import Link from "next/link";

import styles from "./AboutUsNavBar.module.css";

const AboutUsNavBar = () => {
  const router = useRouter();
  return (
    <div className={styles.aboutUsNav}>
      <div className={styles.container}>
        {ABOUT_US_NAVBAR_DATA.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              router.pathname === link.href
                ? `${styles.link} ${styles.active}`
                : `${styles.link}`
            }
            id={link.href}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default AboutUsNavBar;
