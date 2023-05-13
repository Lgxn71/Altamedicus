import Container from "@/components/Layout/Container";
import styles from "./AboutCompanyVideo.module.css";

const AboutCompanyVideo = (props) => {
  return (
    <section>
      <Container>
        <div className={styles.header}>
          <p className="eyebrows">Узнайте нас лучше</p>
          <h2>Сохраняем здоровье, опираясь на научный подход</h2>
          <p>
            Мы работаем во благо Вашего здоровья и помогаем быть здоровыми,
            каждый день!
          </p>
        </div>
        <div className={styles.videoContainer}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/pyd_ldlso1k"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutCompanyVideo;
