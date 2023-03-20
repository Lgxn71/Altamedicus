import Container from "@/components/Layout/Container";
import Image from "next/image";
import AboutUsHeroIMG from "../../../../../public/img/AboutUsHeroIMG.png";
import styles from "./AboutUsHero.module.css";

const AboutUsHero = () => {
  return (
    <section>
      <Container>
        <div className={styles.header}>
          <h1>
            Забота о <span className="highlight">вашем здоровье </span> в сердце
            столицы!
          </h1>
          <p>
            Основной акцент мы делаем на непрерывном профессиональном
            образовании медицинских специалистов и современном диагностическом
            оборудовании.
          </p>
        </div>
      </Container>
      <Image
        src={AboutUsHeroIMG}
        alt="HeroImage"
        className={styles.heroImage}
      />
    </section>
  );
};

export default AboutUsHero;
