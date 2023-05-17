import HowToApply from "@/components/AboutUs/Hiring/HowToApply";
import HiringProcess from "@/components/AboutUs/Hiring/hiringProcess";

import Hero from "@/components/UI/Hero/Hero";
import Container from "@/components/UI/Container/Container";

const HiringPage = () => {
  return (
    <>
      <Hero
        isButtonShown={false}
        isImageShown={false}
        highlightedText="нанимаем"
        beforeHighlight="Мы "
        paragraphText="Мы постоянно развиваемся и ищем новых талантливых людей для работы в нашей команде."
        aboutUsPadding={true}
      />
      <Container>
        <HowToApply />
        <HiringProcess />
      </Container>
    </>
  );
};

export default HiringPage;
