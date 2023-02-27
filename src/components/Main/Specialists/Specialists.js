import TitleEyebrow from "@/components/TitleEyebrow/TitleEybrow";
import Container from "@/components/UI/Container/Container";
import PersonCard from "@/components/UI/PersonCard/PersonCard";

import SpecialistsData from "@/DataForComponents/main/Specialists/SpecialistsData.json";

import styles from "./Specialists.module.css";

const Specialists = () => {
  const DUMMY_DATA = [
    {
      id: "e1",
      src: "/img/image.jpg",
      fullname: "Text",
      occupation: "Text",
    },
    {
      id: "e2",
      src: "/img/image.jpg",
      fullname: "Text",
      occupation: "Text",
    },
    {
      id: "e3",
      src: "/img/image.jpg",
      fullname: "Text",
      occupation: "Text",
    },
    {
      id: "e4",
      src: "/img/image.jpg",
      fullname: "Text",
      occupation: "Text",
    },
  ];

  return (
    <Container>
      <TitleEyebrow
        linkPath="/about-us/employees"
        readMoreExist={true}
        eyebrowText="Наши cпециалисты"
        titleText={`Наши эксперты в области медицины помогут вам!`}
        paragraph={`Врачи Arta Medicus Clinic — эксперты в своих областях медицины и владеют всеми передовыми методиками. `}
      />
      <div className={styles["specialists-container"]}>
        {DUMMY_DATA.map((person) => {
          return (
            <PersonCard
              key={person.id}
              imageSrc={person.src}
              fullname={person.fullname}
              occupation={person.occupation}
            />
          );
        })}
      </div>
    </Container>
  );
};
export default Specialists;
