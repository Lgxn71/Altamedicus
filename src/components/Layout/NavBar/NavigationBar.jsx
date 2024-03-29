import { useState } from "react";
import { useRouter } from "next/router";

import { atom, useRecoilState } from "recoil";

import Link from "next/link";
import Image from "next/image";

import { MAINLINKS } from "@/data/LinksData/links";

import logo from "../../../../public/img/Logo.png";

import MobileAsideBar from "./MobileAsideBar";

import ButtonPrimary from "@/components/UI/Buttons/ButtonPrimary";
import Modal from "@/components/UI/Modal/Modal.jsx";

import styles from "./NavigationBar.module.css";

export const popupState = atom({
  key: "popupOrder",
  default: false,
});

const NavigationBar = () => {
  const router = useRouter();

  const [isSideBarMobileOpen, setIsSideBarMobileOpen] = useState(false);

  const [isPopupShown, setIsPopupShown] = useRecoilState(popupState);

  const openModalHandler = (event) => {
    setIsPopupShown(true);
  };
  const closeModalHandler = () => {
    setIsPopupShown(false);
  };

  const sideBarMobileHandler = () => {
    setIsSideBarMobileOpen(!isSideBarMobileOpen);
  };

  const mainLinkMap = MAINLINKS.map((link) => (
    <Link
      href={link.href}
      key={link.href}
      className={`${styles.navLink} 
    ${
      router.pathname.slice(0, 10) === link.href.slice(0, 10)
        ? styles.active
        : ""
    }`}
    >
      {link.text}
    </Link>
  ));

  // to display burger
  const BURGER_LINES = [1, 2, 3];
  const BURGER_LINES_MAP = BURGER_LINES.map((line) => (
    <span
      key={line}
      className={`${styles.burgerLine} ${isSideBarMobileOpen && styles.active}`}
    />
  ));

  return (
    <>
      {isPopupShown ? (
        <Modal
          onOpenModal={openModalHandler}
          onCloseModal={closeModalHandler}
        />
      ) : undefined}
      

      <header className={styles.navigation}>
        <div className={styles.navContainer}>
          <nav className={styles.navbar}>
            <Link href="/" className={styles.navbarLogo}>
              <Image src={logo} alt="Logo" className={styles.logoImage} />
            </Link>

            <div className={styles.navLinks}>
              {mainLinkMap}

              <ButtonPrimary onClick={openModalHandler}>
                Заказать звонок
              </ButtonPrimary>
            </div>
            {/* Burger menu */}
            <div className={styles.burger} onClick={sideBarMobileHandler}>
              {BURGER_LINES_MAP}
            </div>
          </nav>
        </div>

        {/* Aside bar for mobile */}
        <MobileAsideBar
          sideBarMobileHandler={sideBarMobileHandler}
          isSideBarMobileOpen={isSideBarMobileOpen}
        />
      </header>
    </>
  );
};

export default NavigationBar;
