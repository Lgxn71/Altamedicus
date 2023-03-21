import Container from "@/components/Layout/Container";
import styles from "./MainVideo.module.css"

const MainVideo = (props) => {
    return (
      <section>
        <Container>
          <div className={styles.header}>
            <p className="eyebrows">Узнайте нас лучше</p>
            <h2>Посмотрите видео, чтобы больше узнать о нашем центре!</h2>
            <p>
            Наша цель - предоставление высокопрофессиональной медицинской помощи в атмосфере максимального комфорта, уюта и понимания.
            </p>
          </div>
          <div className={styles.videoContainer}>
            <iframe
              className={styles.video}
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </Container>
      </section>
    );
  };
  
  export default MainVideo;
  