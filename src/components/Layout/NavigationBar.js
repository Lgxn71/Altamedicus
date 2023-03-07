import styles from "./NavigationBar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../../public/img/logo.png";
import ButtonPrimary from "../UI/Buttons/ButtonPrimary";

const NavigationBar = () => {
  const router = useRouter();

  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.navContainer}>
          <div className={styles.navbar}>
            <Link href="/" className={styles.navbarLogo}>
              <Image src={logo} alt="Logo" className={styles.logoImage} />
            </Link>
            <div className={styles.navLinks}>
              <Link
                href="/about-us/about-company"
                className={
                  router.pathname == "/about-us/about-company" ||
                  router.pathname == "/about-us/culture" ||
                  router.pathname == "/about-us/specialists" ||
                  router.pathname == "/about-us/hiring"
                    ? `${styles.navLink} ${styles.active}`
                    : `${styles.navLink}`
                }
              >
                О нас
              </Link>
              <Link
                href="/services"
                className={
                  router.pathname == "/services"
                    ? `${styles.navLink} ${styles.active}`
                    : `${styles.navLink}`
                }
              >
                Услуги
              </Link>
              <Link
                href="/outpatient-surgery"
                className={
                  router.pathname == "/outpatient-surgery"
                    ? `${styles.navLink} ${styles.active}`
                    : `${styles.navLink}`
                }
              >
                Амбулаторная Хирургия
              </Link>
              <Link
                href="/contacts"
                className={
                  router.pathname == "/contacts"
                    ? `${styles.navLink} ${styles.active}`
                    : `${styles.navLink}`
                }
              >
                Контакты
              </Link>
              <ButtonPrimary>Заказать звонок</ButtonPrimary>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
