import Container from "@/components/Layout/Container";
import SpecialistCard from "@/components/UI/SpecialistCard/SpecialistCard";
import styles from "./Specialists.module.css";

// ---------------- DUMMY_DATA Start ----------------

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
  {
    id: "e5",
    src: "/img/specialists/aizada_zhamashevna.png",
    name: "Жумабаева Айзада Жамашевна",
    occupation: "Дерматолог",
  },
  {
    id: "e6",
    src: "/img/specialists/zhandos_kuatbekovich.png",
    name: "Смагул Жандос Куатбекович",
    occupation: "Пластический хирург",
  },
  {
    id: "e7",
    src: "/img/specialists/aigerim_brisheva.png",
    name: "Бришева Айгерим",
    occupation: "Эндокринолог",
  },
  {
    id: "e8",
    src: "/img/specialists/asylbek_bolatbekovich.png",
    name: "Ахметжанов Асылбек Болатбекович",
    occupation: "Пластический хирург",
  },
  {
    id: "e9",
    src: "/img/specialists/asylbek_bolatbekovich.png",
    name: "Бекбосынов Асхат Жунусович",
    occupation: "Пластический хирург, ангиохирург",
  },
  {
    id: "e10",
    src: "/img/specialists/almat_kazisovich.png",
    name: "Сеилов Куат Омурович",
    occupation: "Торакальный хирург",
  },
  {
    id: "e11",
    src: "/img/specialists/kuralai_ibrashevna.png",
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
            Врачи Arta Medicus Clinic — эксперты в своих областях медицины и
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
