import AboutUsHero from "./Hero/AboutUsHero";
import AboutCompanyVideo from "./AboutCompanyVideo/AboutCompanyVideo";
import ActualOffers from "./ActualOffers/ActualOffers";
import WhyTrustUs from "./WhyTrustUs/WhyTrustUs"

function AboutUs() {
  return (
    <section>
        <AboutUsHero />
        <WhyTrustUs />   
        <AboutCompanyVideo /> 
        <ActualOffers />    
    </section>
  );
}

export default AboutUs;
