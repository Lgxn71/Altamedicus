import Container from "@/components/UI/Container/Container";
import Eyebrow from "@/components/UI/Eyebrow/Eyebrow";

import styles from "./AboutCompanyVideo.module.css";

const AboutCompanyVideo = (props) => {
  return (
    <section>
      <Container>
        <Eyebrow
          eyebrowTex="Узнайте нас лучше"
          titleText="Сохраняем здоровье, опираясь на научный подход"
          paragraphText=" Мы работаем во благо Вашего здоровья и помогаем быть здоровыми, каждый день!"
        />

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
