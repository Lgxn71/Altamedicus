import Head from "next/head";
import Hero from "@/components/UI/Hero/Hero";
import HeroImg from "/public/img/outpatientIMG.png";

import OutpatientSurgery from "@/components/Outpatient/OutpatientSurgery.jsx";

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Artamedicus</title>
        <meta
          name="description"
          content="Амбулаторная хирургия в Альтамедикус"
        />
      </Head>
      <Hero
        isButtonShown={false}
        highlightedText="Arta Medicus"
        beforeHighlight="Амбулаторная хирургия в "
        afterHighlight=""
        paragraphText="Хирургия одного дня — это различные по сложности и объему операции, которые позволяют в кратчайшие сроки (в пределах 1 суток) решить проблему, связанную с заболеванием или решением пациента напластическую операцию."
        isImageShown={true}
        img={HeroImg}
        altImage="bubbles"
      />
      <OutpatientSurgery />
    </>
  );
};

export default ServicesPage;
