import TitleEyebrow from "@/components/TitleEyebrow/TitleEybrow";
import Container from "@/components/UI/Container/Container";
import OurPrinciplesBody from "./OurPrinciplesBody";
import styles from "./OurPrinciples.module.css";
const OurPrinciples = () => {
  return (
    <div className="background-color-dark-white ">
      <Container>
        <TitleEyebrow
          eyebrowText="Наши ценности"
          titleText="Мы работаем вот так"
          paragraph="Мы считаем, что лучшая работа — та, которая приносит удовольствие поэтому мы постоянно развиваем и укрепляем нашу корпоративную культуру."
          paragraphWidth="wide"
        />
        <OurPrinciplesBody />
      </Container>
    </div>
  );
};
export default OurPrinciples;
