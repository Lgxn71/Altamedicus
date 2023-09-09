import Image from "next/image";

import Eyebrow from "@/components/UI/Eyebrow/Eyebrow";
import Container from "@/components/UI/Container/Container";

// images
import Offer_1 from "/public/img/Offers/Offer_1.png";
import Offer_2 from "/public/img/Offers/Offer_2.png";

import styles from "./ActualOffers.module.css";

const ActualOffers = () => {
  const offersMap = offers.map((offer) => (
    <div key={offer.title} className={styles.column}>
      <Image
        className={styles.IMG}
        src={offer.src}
        alt="Актуальные предложения"
        quality={100}
        width={600}
        height={600}
      />
      <p className={styles.title}>{offer.title}</p>
      <p>{offer.text}</p>
    </div>
  ));

  return (
    <section className={styles.actualOffers}>
      <Container>
        <Eyebrow
          eyebrowText="Актуальные предложения"
          titleText="Мы ставим ценность клиентов на первое место"
          paragraphText="Клиника Arta Medicus заботится о комфорте и удобстве своих пациентов. Мы делаем сервис доступным для каждого!"
        />

        <div className={styles.body}>{offersMap}</div>
      </Container>
    </section>
  );
};

export default ActualOffers;

const offers = [
  {
    title: "Комплексное исследование женского здоровья.",
    src: Offer_1,
    text: "Для любой представительницы прекрасного пола интимное здоровье - деликатная и важная тема. Узнайте, как позаботиться о себе.",
  },
  {
    title: "Бесплатная консультация пластического хирурга!",
    src: Offer_2,
    text: " В Arta Medicus вы можете проконсультироваться у пластического хирурга по всем видам пластических операций абсолютно бесплатно!",
  },
];
