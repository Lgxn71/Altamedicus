import Container from "../Layout/Container";
import styles from "./OutpatientSurgery.module.css";
import OutpatientTab from "./OutpatientTab";

const OutpatientSurgery = () => {
  return (
    <section>
      <Container>
        <div className={styles.header}>
          <div className={styles.title}>
            <p className="eyebrows">Амбулаторная Хирургия</p>
            <h2>Полноценное хирургическое лечение за 1 день.</h2>
            <p>
              Современный уровень развития хирургии позволяет выполнять широкий
              спектр оперативных вмешательств без госпитализации, в «стационаре
              одного дня», то есть амбулаторно.
            </p>
          </div>
        </div>
        <OutpatientTab />
      </Container>
    </section>
  );
};
export default OutpatientSurgery;
