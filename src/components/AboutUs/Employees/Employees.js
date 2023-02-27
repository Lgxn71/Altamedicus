import Hero from "@/components/Hero/Hero";
import PersonCard from "@/components/UI/PersonCard/PersonCard";
import styles from "./Employees.module.css";
import ContainerWithoutSpace from "@/components/UI/Container/ContainerWithoutSpace";
const Employees = (props) => {
  const DUMMY_DATA = [
    {
      id: "p1",
      imageSrc: "/img/image.jpg",
      fullname: "Tacobaev Tacobaevich",
      occupation: "doctor",
    },
    {
      id: "p2",
      imageSrc: "/img/image.jpg",
      fullname: "Tacobaev Tacobaevich",
      occupation: "doctor",
    },
    {
      id: "p3",
      imageSrc: "/img/image.jpg",
      fullname: "Tacobaev Tacobaevich",
      occupation: "doctor",
    },
    {
      id: "p4",
      imageSrc: "/img/image.jpg",
      fullname: "Tacobaev Tacobaevich",
      occupation: "doctor",
    },
    {
      id: "p5",
      imageSrc: "/img/image.jpg",
      fullname: "Tacobaev Tacobaevich",
      occupation: "doctor",
    },
    {
      id: "p6",
      imageSrc: "/img/image.jpg",
      fullname: "Tacobaev Tacobaevich",
      occupation: "doctor",
    },
    {
      id: "p7",
      imageSrc: "/img/image.jpg",
      fullname: "Tacobaev Tacobaevich",
      occupation: "doctor",
    },
    {
      id: "p8",
      imageSrc: "/img/image.jpg",
      fullname: "Tacobaev Tacobaevich",
      occupation: "doctor",
    },
    {
      id: "p9",
      imageSrc: "/img/image.jpg",
      fullname: "Tacobaev Tacobaevich",
      occupation: "doctor",
    },
    {
      id: "p10",
      imageSrc: "/img/image.jpg",
      fullname: "Tacobaev Tacobaevich",
      occupation: "doctor",
    },
    {
      id: "p11",
      imageSrc: "/img/image.jpg",
      fullname: "Tacobaev Tacobaevich",
      occupation: "doctor",
    },
    {
      id: "p12",
      imageSrc: "/img/image.jpg",
      fullname: "Tacobaev Tacobaevich",
      occupation: "doctor",
    },
  ];

  return (
    <>
      <Hero
        onSideBar={props.onSideBar}
        spaceBottom="100"
        titleWidth="762"
        paragraphWidth="narrow"
        greyishText="Врачи Arta Medicus Clinic — эксперты в своих областях медицины и владеют всеми передовыми методиками. "
        textBeforeHighlight="Наша "
        highlighted="Команда"
      />

      <ContainerWithoutSpace>
        <div className={styles["employees-container"]}>
          {DUMMY_DATA.map((employee) => (
            <PersonCard
              key={employee.id}
              imageSrc={employee.imageSrc}
              fullname={employee.fullname}
              occupation={employee.occupation}
            />
          ))}
        </div>
      </ContainerWithoutSpace>
    </>
  );
};
export default Employees;
