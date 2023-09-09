import Image from "next/image";

import Container from "@/components/UI/Container/Container";
import Eyebrow from "@/components/UI/Eyebrow/Eyebrow";

import MSpecialists from "/public/img/MSpecialists.png";

import styles from "./WhyUs.module.css";

const WhyUs = () => {
  return (
    <Container>
      <Eyebrow
        eyebrowText="Работать с нами легко!"
        titleText="Мы даем возможность профессионального роста"
        paragraphText=" Arta Medicus - это команда профессионалов, которые стремятся к постоянному совершенствованию и развитию."
      />
      <Image
        src={MSpecialists}
        alt="Специалисты"
        width={1110}
        height={693}
        className={styles.IMG}
        quality={100}
      />
    </Container>
  );
};
export default WhyUs;
