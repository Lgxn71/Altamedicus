import Numbers from "./Numbers/Numbers";
import Specialists from "./Specialists/Specialists";
import Testimonials from "./Testimonials/Testimonials"
import FAQ from "./FAQ/FAQ";
import HeroSection from "../Hero/HeroSection";
import MainVideo from "./MainVideo/MainVideo";

const Main = () => {
  return (
    <main>
      <HeroSection />
      <Numbers />
      <Specialists />
      <MainVideo />
      <Testimonials />
      <FAQ />
    </main>
  );
};
export default Main;
