import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import CTA from "./CTA"
function Layout(props) {
  return (
    <div>
      <NavigationBar />
      {props.children}
      <CTA />
      <Footer />
    </div>
  );
}

export default Layout;
