import Container from "@/components/UI/Container/Container";
import SpecialistCard from "@/components/UI/SpecialistCard/SpecialistCard.jsx";

import styles from "./Specialists.module.css";

const Specialists = () => {
  const speciatlistMap = specialistData.map((employee) => (
    <SpecialistCard
      key={employee.id}
      name={employee.name}
      imageSrc={employee.src}
      occupation={employee.occupation}
    />
  ));

  return (
    <section className={styles.specialists}>
      <Container>
        <Eyebrow
          eyebrowText="Наши Специалисты"
          titleText="Доверьте заботу о своем здоровье профессионалам!"
          paragraphText="Врачи Arta Medicus Clinic — эксперты в своих областях медицины и владеют всеми передовыми методиками."
          isLinkShown={true}
          linkText=" Узнать Больше"
          linkHref="/about-us/specialists"
        />

        <ul className={styles.employees}>{speciatlistMap}</ul>
      </Container>
    </section>
  );
};

export default Specialists;

// images

import specialist1 from "/public/img/Specialists/kuat_omurovich.png";
import specialist2 from "/public/img/Specialists/aigul_sahtanbergenovna.png";
import specialist3 from "/public/img/Specialists/bayan_toishibekovna.png";
import specialist4 from "/public/img/Specialists/lyan_chundun.png";
import Eyebrow from "@/components/UI/Eyebrow/Eyebrow";

// DUMMY_DATA
const specialistData = [
  {
    id: "e1",
    src: specialist1,
    name: "Сеилов Куат Омурович",
    occupation: "Пластический хирург",
  },
  {
    id: "e2",
    src: specialist2,
    name: "Сеилова Айгуль Сахтанбергеновна",
    occupation: "Врач Акушер-гинеколог. Врач УЗИ",
  },
  {
    id: "e3",
    src: specialist3,
    name: "Баусадыкова Баян Тойшибековна",
    occupation: "Врач акушер-гинеколог",
  },
  {
    id: "e4",
    src: specialist4,
    name: "Лян Чундун",
    occupation: "ЛОР врач",
  },
];

//
