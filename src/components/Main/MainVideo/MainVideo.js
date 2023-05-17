import Eyebrow from "@/components/UI/Eyebrow/Eyebrow";
import Container from "@/components/UI/Container/Container";
import styles from "./MainVideo.module.css";

const MainVideo = (props) => {
  return (
    <section>
      <Container>
        <Eyebrow
          paragraphText="Наша цель - предоставление высокопрофессиональной медицинской помощи
          в атмосфере максимального комфорта, уюта и понимания."
          titleText="Посмотрите видео, чтобы больше узнать о нашем центре!"
          eyebrowText="Узнайте нас лучше"
        />

        <div className={styles.videoContainer}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/m75jVVjOCn8"
            title="YouTube video player"
            allowFullScreen
          />
        </div>
      </Container>
    </section>
  );
};

export default MainVideo;
