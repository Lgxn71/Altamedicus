import { useRouter } from "next/router";

import NavigationBar from "./NavBar/NavigationBar.jsx";
import AboutUsNav from "./NavBar/AboutUsNavBar.jsx";

import CTA from "./CTA/CTA.jsx";
import Footer from "./Footer.jsx";

const Layout = (props) => {
  const router = useRouter();
  const aboutUsPath = router.pathname.substring(0, 10);

  return (
    <>
      <NavigationBar />
      {aboutUsPath === "/about-us/" ? <AboutUsNav /> : ""}
      {props.children}
      <CTA />
      <Footer />
    </>
  );
};

export default Layout;
