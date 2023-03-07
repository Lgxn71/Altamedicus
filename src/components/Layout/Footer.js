import Container from "./Container";
import Image from "next/image";
import logo from "../../../public/img/Logo_White.png";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <section>
      <div className={styles.header}>
        <Container>
          <div className={styles.row}>
            <div className={styles.column}>
              <Image src={logo} alt="logo" width={195} height={22} />
              <p className={styles.text}>
                Мы улучшаем качество жизни людей, сохраняем молодость, красоту и
                здоровье. Опираемся на многолетний опыт, эффективные технологии
                и профессионализм.
              </p>
            </div>
            <div className={styles.links}>
              <Link className={styles.link} href="">О нас</Link>
              <Link className={styles.link} href="">Амбулаторная Хирургия</Link>
              <Link className={styles.link} href="">Специалисты</Link>
              <Link className={styles.link} href="">Контакты</Link>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.bottom}>
        <div className={styles.footerBottomContainer}>
            <p>(c) ArtaMedicus 2022 ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
