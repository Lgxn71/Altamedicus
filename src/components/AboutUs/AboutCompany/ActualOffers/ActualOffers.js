import Container from "@/components/Layout/Container";
import styles from "./ActualOffers.module.css";
import Image from "next/image";

// images
import Offer_1 from "../../../../../public/img/Offers/Offer_1.png";
import Offer_2 from "../../../../../public/img/Offers/Offer_2.png";

const ActualOffers = () => {
  return (
    <section className={styles.actualOffers}>
      <Container>
        <div className={styles.header}>
          <p className="eyebrows">Актуальные предложения</p>
          <h2>Мы ставим ценность клиентов на первое место</h2>
          <p>
            Клиника Alta Medicus заботится о комфорте и удобстве своих
            пациентов. <br />
            Мы делаем сервис доступным для каждого!
          </p>
        </div>
        <div className={styles.body}>
          <div className={styles.column}>
            <Image
              src={Offer_1}
              alt="Актуальные предложения"
              width={540}
              height={400}
            />
            <p className={styles.title}>
              Комплексное исследование женского здоровья.
            </p>
            <p className={styles.description}>
              Для любой представительницы прекрасного пола интимное здоровье -
              деликатная и важная тема. Узнайте, как позаботиться о себе.
            </p>
          </div>
          <div className={styles.column}>
            <Image
              src={Offer_2}
              alt="Актуальные предложения"
              width={540}
              height={400}
            />
            <p className={styles.title}>
              Бесплатная консультация пластического хирурга!
            </p>
            <p className={styles.description}>
              В Alta Medicus вы можете проконсультироваться у пластического
              хирурга по всем видам пластических операций абсолютно бесплатно!
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ActualOffers;
