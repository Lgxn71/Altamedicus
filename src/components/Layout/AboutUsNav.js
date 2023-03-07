import Link from "next/link";
import styles from "./AboutUsNav.module.css";
import { useRouter } from "next/router";

const AboutUsNav = () => {
  const router = useRouter();
  return (
    <div className={styles.aboutUsNav}>
      <div className={styles.container}>
        <Link href="/about-us/about-company" className={router.pathname == "/about-us/about-company" ? `${styles.link} ${styles.active}` : `${styles.link}`}>
          О Компании
        </Link>
        <Link href="/about-us/culture" className={router.pathname == "/about-us/culture" ? `${styles.link} ${styles.active}` : `${styles.link}`}>
          Культура
        </Link>
        <Link href="/about-us/specialists" className={router.pathname == "/about-us/specialists" ? `${styles.link} ${styles.active}` : `${styles.link}`}>
          Специалисты
        </Link>
        <Link href="/about-us/hiring" className={router.pathname == "/about-us/hiring" ? `${styles.link} ${styles.active}` : `${styles.link}`}>
          Трудоустройство
        </Link>
      </div>
    </div>
  );
};
export default AboutUsNav;
