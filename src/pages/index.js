import Head from "next/head.js";
import Hero from "@/components/UI/Hero/Hero";
import HeroImg from "/public/img/HeroIMG.png";

import Numbers from "../components/Main/Numbers/Numbers.jsx";
import Specialists from "../components/Main/Specialists/Specialists.jsx";
import MainVideo from "../components/Main/MainVideo/MainVideo";
import Testimonials from "../components/Main/Testimonials/Testimonials.jsx";
import FAQ from "../components/Main/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <Head>
        <title>Altamedicus</title>
        <meta name="description" content="Добро пожаловать в Alta Medicus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        isButtonShown={true}
        highlightedText="Alta Medicus"
        beforeHighlight="Добро пожаловать в "
        afterHighlight=""
        paragraphText=" Мы улучшаем качество жизни людей, сохраняем молодость, красоту и здоровье. Опираемся на многолетний опыт, эффективные технологии и профессионализм."
        isImageShown={true}
        img={HeroImg}
        altImage="bubbles"
      />
      <Numbers />
      <Specialists />
      <MainVideo />
      <Testimonials />
      <FAQ />
    </>
  );
}
