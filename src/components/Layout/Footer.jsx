import Link from "next/link";
import Image from "next/image";

import { ABOUT_US_NAVBAR_DATA } from "@/data/LinksData/links";

import Container from "../UI/Container/Container.jsx";
import logo from "../../../public/img/Logo_White.png";

import styles from "./Footer.module.css";

const Footer = () => {
  const aboutUs = ABOUT_US_NAVBAR_DATA.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={styles.link}
      id={link.href}
    >
      {link.text}
    </Link>
  ));

  return (
    <footer className={styles.header}>
      <Container>
        <div className={styles.row}>
          <div className={styles.column}>
            <Image src={logo} alt="Лого Альтамедикус" width={195} height={22} />
            <p className={styles.text}>
              Мы улучшаем качество жизни людей, сохраняем молодость, красоту и
              здоровье. Опираемся на многолетний опыт, эффективные технологии и
              профессионализм.
            </p>
          </div>
          <div className={styles.links}>{aboutUs}</div>
        </div>
      </Container>
      <div className={styles.bottom}>
        <div className={styles.footerBottomContainer}>
          <p>(c) ArtaMedicus 2022 ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
