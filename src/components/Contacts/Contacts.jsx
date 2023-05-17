import Image from "next/image";

import { CONTACT_DATA_1, CONTACT_DATA_2 } from "@/data/ContactData/contact";

import map from "../../../public/img/map.png";

import Hero from "../UI/Hero/Hero";
import Container from "../UI/Container/Container.jsx";

import styles from "./Contacts.module.css";

const Contacts = () => {
  const CONTACT_DATA_3 = [...CONTACT_DATA_1, ...CONTACT_DATA_2];

  const contactMapping = CONTACT_DATA_3.map((contact) => (
    <li key={contact.detail} className={styles.description}>
      <p className={styles.title}>{contact.detail}</p>

      <p className={styles.info}>{contact.text}</p>
    </li>
  ));

  return (
    <section>
      <Hero
        isButtonShown={false}
        highlightedText="здесь"
        beforeHighlight="Мы находимся "
        afterHighlight=""
        paragraphText="Удобное расположение - плюс Alta Medicus Clinic, ведь в мегаполисе так важно экономить каждую минуту."
        isImageShown={false}
        img={undefined}
        altImage=""
      />

      <Container isPadding={true}>
        <ul style={{ marginTop: "-130px" }} className={styles.body}>
          {contactMapping}
        </ul>
        {/* MAP */}
        <Image src={map} alt="карта" className={styles.map} priority />
      </Container>
    </section>
  );
};
export default Contacts;
