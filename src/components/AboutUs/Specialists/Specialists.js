import Container from "@/components/Layout/Container";
import SpecialistCard from "@/components/UI/SpecialistCard/SpecialistCard";
import styles from "./Specialists.module.css";


// images

import specialist1 from "../../../../public/img/Specialists/kuat_omurovich.png"
import specialist2 from "../../../../public/img/Specialists/aigul_sahtanbergenovna.png"
import specialist3 from "../../../../public/img/Specialists/bayan_toishibekovna.png"
import specialist4 from "../../../../public/img/Specialists/lyan_chundun.png"
import specialist5 from "../../../../public/img/Specialists/aizada_zhamashevna.png"
import specialist6 from "../../../../public/img/Specialists/zhandos_kuatbekovich.png"
import specialist7 from "../../../../public/img/Specialists/aigerim_brisheva.png"
import specialist8 from "../../../../public/img/Specialists/asylbek_bolatbekovich.png"
import specialist9 from "../../../../public/img/Specialists/ashat_zhunusovich.png"
import specialist10 from "../../../../public/img/Specialists/almat_kazisovich.png"
import specialist11 from "../../../../public/img/Specialists/kuralai_ibrashevna.png"


// ---------------- DUMMY_DATA Start ----------------

const DUMMY_DATA = [
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
  {
    id: "e5",
    src: specialist5,
    name: "Жумабаева Айзада Жамашевна",
    occupation: "Дерматолог",
  },
  {
    id: "e6",
    src: specialist6,
    name: "Смагул Жандос Куатбекович",
    occupation: "Пластический хирург",
  },
  {
    id: "e7",
    src: specialist7,
    name: "Бришева Айгерим",
    occupation: "Эндокринолог",
  },
  {
    id: "e8",
    src: specialist8,
    name: "Ахметжанов Асылбек Болатбекович",
    occupation: "Пластический хирург",
  },
  {
    id: "e9",
    src: specialist9,
    name: "Бекбосынов Асхат Жунусович",
    occupation: "Пластический хирург, ангиохирург",
  },
  {
    id: "e10",
    src: specialist10,
    name: "Такабаев Алмат Казисович",
    occupation: "Торакальный хирург",
  },
  {
    id: "e11",
    src: specialist11,
    name: "Шугаиповна Куралай Ибрашевна",
    occupation: "Эндокринолог",
  },
];

// ---------------- DUMMY_DATA End ----------------

const Specialists = () => {
  return (
    <section>
      <Container>
        <div className={styles.header}>
          <h1>
            Наша <span className="highlight">Команда</span>
          </h1>
          <p>
            Врачи Alta Medicus Clinic — эксперты в своих областях медицины и
            владеют всеми передовыми методиками.
          </p>
        </div>
        <ul className={styles.body}>
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
