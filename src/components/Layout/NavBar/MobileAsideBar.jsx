import { useRecoilState } from "recoil";
import { popupState } from "./NavigationBar";

import Link from "next/link";

import ButtonPrimary from "@/components/UI/Buttons/ButtonPrimary";

import { MAINLINKS } from "@/data/LinksData/links";

import styles from "./MobileAsideBar..module.css";

const MobileAsideBar = ({ sideBarMobileHandler, isSideBarMobileOpen }) => {
  const [isPopupShown, setIsPopupShown] = useRecoilState(popupState);

  const openModalHandler = () => {
    setIsPopupShown(true);
  };

  const mainLinkMap = MAINLINKS.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      onClick={sideBarMobileHandler}
      className={styles.sidebarLinks}
    >
      {link.text}
    </Link>
  ));

  return (
    <aside
      className={
        !isSideBarMobileOpen
          ? `${styles.burgerMenu} ${styles.active}`
          : `${styles.burgerMenu}`
      }
    >
      <div className={styles.sidebar}>
        {mainLinkMap}

        <div className={styles.buttonContainer}>
          <ButtonPrimary onClick={openModalHandler}>
            Заказать звонок
          </ButtonPrimary>
        </div>
      </div>
    </aside>
  );
};

export default MobileAsideBar;
