import Hero from "@/components/UI/Hero/Hero";
import HeroImg from "/public/img/outpatientIMG.png";

import OutpatientSurgery from "@/components/Outpatient/OutpatientSurgery.jsx";

const ServicesPage = () => {
  return (
    <>
      <Hero
        isButtonShown={false}
        highlightedText="Alta Medicus"
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
