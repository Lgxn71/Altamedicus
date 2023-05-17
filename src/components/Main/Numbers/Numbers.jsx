import Container from "@/components/UI/Container/Container";

import styles from "./Numbers.module.css";

const Numbers = () => {
  const achievementsMap = achievements.map((achievement) => (
    <li key={achievement.number} className={styles.singleAchievement}>
      <p className={styles.number}>{achievement.number}</p>

      <p className={styles.achievementText}>
        <span>{achievement.sp1}</span>
        <span>{achievement.sp2}</span>
      </p>
    </li>
  ));

  return (
    <section className={styles.numbers}>
      <Container>
        <div className={styles.header}>
          <h2>Клиника Alta Medicus сегодня это:</h2>
          <p>Наши достижения в медицинском путешествии обозначено цифрами</p>
        </div>
        <ul className={styles.achievements}>{achievementsMap}</ul>
      </Container>
    </section>
  );
};

export default Numbers;

const achievements = [
  { number: "+3000", sp1: "Благодарных", sp2: "пациентов" },
  { number: "+2000", sp1: "Операций", sp2: "в год" },
  { number: "+100", sp1: "Дипломов", sp2: "и Наград" },
  { number: "+70", sp1: "Научных", sp2: "статей" },
];
