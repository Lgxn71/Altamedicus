import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import CTA from "./CTA"
import AboutUsNav from "./AboutUsNav";

function Layout(props) {
  return (
    <div>
      <NavigationBar />
      <AboutUsNav />      
      {props.children}
      <CTA />
      <Footer />
    </div>
  );
}

export default Layout;
