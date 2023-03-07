import Container from "../Layout/Container";
import styles from "./OutpatientHero.module.css";
import Image from "next/image";
import HeroImg from "../../../public/img/outpatientIMG.png";

const Outpatient = () => {
  return (
    <section>
      <Container>
        <div className={styles.header}>
          <h1>
            Амбулаторная хирургия в <span className="highlight">Alta Medicus</span>
          </h1>
          <p>
            Хирургия одного дня — это различные по сложности и объему операции,
            которые позволяют в кратчайшие сроки (в пределах 1 суток) решить
            проблему, связанную с заболеванием или решением пациента на
            пластическую операцию.
          </p>
        </div>
      </Container>
      <Image src={HeroImg} alt="HeroImage" className={styles.heroImage} />
    </section>
  );
};

export default Outpatient;
