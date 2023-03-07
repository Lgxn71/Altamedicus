import Container from "@/components/Layout/Container";
import styles from "./Specialists.module.css";
import Link from "next/link";
import SpecialistCard from "@/components/UI/SpecialistCard/SpecialistCard";

// DUMMY_DATA
const DUMMY_DATA = [
  {
    id: "e1",
    src: "/img/specialists/kuat_omurovich.png",
    name: "Сеилов Куат Омурович",
    occupation: "Пластический хирург",
  },
  {
    id: "e2",
    src: "/img/specialists/aigul_sahtanbergenovna.png",
    name: "Сеилова Айгуль Сахтанбергеновна",
    occupation: "Врач Акушер-гинеколог. Врач УЗИ",
  },
  {
    id: "e3",
    src: "/img/specialists/bayan_toishibekovna.png",
    name: "Баусадыкова Баян Тойшибековна",
    occupation: "Врач акушер-гинеколог",
  },
  {
    id: "e4",
    src: "/img/specialists/lyan_chundun.png",
    name: "Лян Чундун",
    occupation: "ЛОР врач",
  },
];

//

const Specialists = () => {
  return (
    <section>
      <Container>
        <div className={styles.header}>
          <div className={styles.title}>
            <p className="eyebrows">Наши Специалисты</p>
            <h2>Забота о вашем здоровье в сердце столицы!</h2>
            <p>
              Врачи Arta Medicus Clinic — эксперты в своих областях медицины и
              владеют всеми передовыми методиками.
            </p>
          </div>
          <Link href="/about-us/specialists" className="navLink">
            Узнать Больше
          </Link>
        </div>
        <ul className={styles.employees}>
          {DUMMY_DATA.map((employee) => (
            <SpecialistCard
              key={employee.id}
              name={employee.name}
              imageSrc={employee.src}
              occupation={employee.occupation}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Specialists;
