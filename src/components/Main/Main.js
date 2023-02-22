import Hero from "../UI/Hero/Hero";
import Numbers from "./Numbers/Numbers";
import Specialists from "./Specialists/Specialists";
import Testimonials from "./Testimonials/Testimonials";
import QA from "./FAQ/FAQ";

const Main = () => {
  return (
    <main>
      <Hero
        buttonIsHere={true}
        greyishText={`Мы улучшаем качество жизни людей, сохраняем молодость, красоту издоровье. Опираемся на многолетний опыт, эффективные технологии и
              профессионализм.`}
        textBeforeHighlight={`Добро пожаловать в `}
        highlighted={`Alta Medicus`}
        textAfterHighlight={``}
      ></Hero>
      <Numbers></Numbers>
      <Specialists></Specialists>
      <Testimonials></Testimonials>
      <QA></QA>
    </main>
  );
};
export default Main;