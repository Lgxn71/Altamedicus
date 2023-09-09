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
        <title>Artamedicus</title>
        <meta name="description" content="Добро пожаловать в Arta Medicus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        isButtonShown={true}
        highlightedText="Arta Medicus"
        beforeHighlight="Добро пожаловать в "
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
