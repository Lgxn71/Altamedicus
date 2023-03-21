import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./NavigationBar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/img/Logo.png";
import ButtonPrimary from "../UI/Buttons/ButtonPrimary";

const NavigationBar = () => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const navBarHandler = () => {
    if (window.innerWidth >= 768) {
      setOpen(false);
      setClick(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", navBarHandler);
    return () => window.removeEventListener("resize", navBarHandler);
  }, []);

  const handleClick = () => setClick(!click);

  const closeMenuHandler = () => {
    setClick(false);
    setOpen(false);
  };
  const router = useRouter();

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        <div className={styles.navbar}>
          <Link
            href="/"
            className={styles.navbarLogo}
            onClick={closeMenuHandler}
          >
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
          <div className={styles.burger} onClick={() => setOpen(!open)}>
            <span
              className={
                open
                  ? `${styles.burgerLine} ${styles.active}`
                  : `${styles.burgerLine}`
              }
            ></span>
            <span
              className={
                open
                  ? `${styles.burgerLine} ${styles.active}`
                  : `${styles.burgerLine}`
              }
            ></span>
            <span
              className={
                open
                  ? `${styles.burgerLine} ${styles.active}`
                  : `${styles.burgerLine}`
              }
            ></span>
          </div>
          <div className={styles.mobileNav}></div>
        </div>
      </div>
      <div
        className={
          !open
            ? `${styles.burgerMenu} ${styles.active}`
            : `${styles.burgerMenu}`
        }
      >
        <div className={styles.sidebar}>
          <Link
            href="/about-us/about-company"
            className={styles.sidebarLinks}
            onClick={closeMenuHandler}
          >
            О Нас
          </Link>
          <Link
            href="/services"
            className={styles.sidebarLinks}
            onClick={closeMenuHandler}
          >
            Услуги
          </Link>
          <Link
            href="/outpatient-surgery"
            className={styles.sidebarLinks}
            onClick={closeMenuHandler}
          >
            Амбулаторная Хирургия
          </Link>
          <Link
            href="/contacts"
            className={styles.sidebarLinks}
            onClick={closeMenuHandler}
          >
            Контакты
          </Link>
          <ButtonPrimary>Заказать звонок</ButtonPrimary>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
