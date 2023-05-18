import Head from "next/head";

import Hero from "@/components/UI/Hero/Hero";
import HeroImg from "../../../../public/img/AboutUsHeroIMG.png";

import AboutCompanyVideo from "@/components/AboutUs/AboutCompany/AboutCompanyVideo/AboutCompanyVideo";
import ActualOffers from "@/components/AboutUs/AboutCompany/ActualOffers/ActualOffers.jsx";
import WhyTrustUs from "../../../components/AboutUs/AboutCompany/WhyTrustUs/WhyTrustUs.jsx";
const AboutUs = (props) => {
  return (
    <>
      <Head>
        <title>Altamedicus</title>
        <meta name="description" content="о Альтамедкус" />
      </Head>
      <Hero
        aboutUsPadding={true}
        highlightedText="вашем здоровье"
        beforeHighlight="Забота о"
        afterHighlight="в сердце столицы!"
        paragraphText=" Основной акцент мы делаем на непрерывном профессиональном образовании медицинских специалистов и современном диагностическом оборудовании."
        isImageShown={true}
        img={HeroImg}
        altImage="people standing"
      />
      <AboutCompanyVideo />
      <ActualOffers />
      <WhyTrustUs />
    </>
  );
};
export default AboutUs;
