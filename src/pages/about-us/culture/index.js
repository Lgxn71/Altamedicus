import Head from "next/head";
import Hero from "@/components/UI/Hero/Hero";
import OurValues from "@/components/AboutUs/Culture/OurValues";
import WhyUs from "@/components/AboutUs/Culture/WhyUs";

import CultureHeroIMG from "/public/img/CultureHeroIMG.png";
const CulturePage = () => {
  return (
    <>
      <Head>
        <title>Altamedicus</title>
        <meta name="description" content="Культруа Альтамедкус" />
      </Head>
      <Hero
        isButtonShown={false}
        highlightedText="расти"
        beforeHighlight="Я верю, что мы можем "
        afterHighlight=" вместе"
        paragraphText="Здоровая корпоративная культура помогает нам постоянно повышать эффективность работы всей компании: принадлежность к общему делу влияет на чувство самоценности каждого сотрудника."
        isImageShown={true}
        altImage=""
        img={CultureHeroIMG}
        aboutUsPadding={true}
      />
      <OurValues />
      <WhyUs />
    </>
  );
};

export default CulturePage;
