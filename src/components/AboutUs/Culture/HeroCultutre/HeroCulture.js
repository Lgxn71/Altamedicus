import Container from "@/components/Layout/Container";
import Image from "next/image";
import CultureHeroIMG from "../../../../../public/img/CultureHeroIMG.png";
import styles from "./HeroCulture.module.css";

const HeroCulture = () => {
  return (
    <section>
      <Container>
        <div className={styles.header}>
          <h1>
            Я верю, что мы можем <span className="highlight">расти</span>{" "}
            вместе.
          </h1>
          <p>
            Здоровая корпоративная культура помогает нам постоянно повышать
            эффективность работы всей компании: принадлежность к общему делу
            влияет на чувство самоценности каждого сотрудника.
          </p>
        </div>
      </Container>
      <Image
        src={CultureHeroIMG}
        alt="HeroImage"
        className={styles.heroImage}
      />
    </section>
  );
};

export default HeroCulture;
