import Container from "../../Layout/Container";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import ButtonPrimary from "../../UI/Buttons/ButtonPrimary";
import HeroImg from "../../../../public/img/HeroIMG.png"

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.header}>
          <h1>
            Добро пожаловать в <span className="highlight">Alta Medicus</span>
          </h1>
          <p>
            Мы улучшаем качество жизни людей, сохраняем молодость, красоту и
            здоровье. Опираемся на многолетний опыт, эффективные технологии и
            профессионализм.
          </p>
          <ButtonPrimary>Заказать Звонок</ButtonPrimary>
        </div>
      </Container>
      <Image src={HeroImg} alt="HeroImage" className={styles.heroImage} />
    </section>
  );
};

export default HeroSection;
