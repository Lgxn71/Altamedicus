import Container from "@/components/UI/Container/Container";

import Number from "./Number";
import NumbersData from "@/DataForComponents/main/Numbers/NumbersData.json";

import styles from "./Numbers.module.css";
const Numbers = () => {
  const DUMMY_DATA = [
    {
      number: "3,000",
      text: "Благодарных",
      textLineBreak: "пациентов",
      id: "1",
    },
    {
      number: "70",
      text: "Научных",
      textLineBreak: "Статей",
      id: "2",
    },
    {
      number: "2,000",
      text: "Операций",
      textLineBreak: "в год",
      id: "3",
    },
    {
      number: "100",
      text: "Дипломов",
      textLineBreak: "и наград",
      id: "4",
    },
  ];

  return (
    <div className="background-color-black ">
      <Container>
        <div className={styles["numbers-container"]}>
          <h2>Клиника Alta Medicus сегодня это:</h2>
          <p className="text-gray">
            Наши достижения в медицинском путешествии обозначено цифрами
          </p>
        </div>
        <ul className={styles.achievments}>
          {DUMMY_DATA.map((number) => {
            return (
              <Number
                key={number.id}
                number={number.number}
                text={number.text}
                textLineBreak={number.textLineBreak}
              />
            );
          })}
        </ul>
      </Container>
    </div>
  );
};

export default Numbers;
