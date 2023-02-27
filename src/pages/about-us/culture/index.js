// artamedicus.com/about-us/about-company
import Layout from "@/components/Layout/Layout";
import Culture from "@/components/AboutUs/Culture/Culture";
const CulturePage = () => {
  return (
    <Layout activeNavbar="aboutUs" onSideBar={true} highlightSideBar="culture">
      <Culture onSideBar={true}></Culture>
    </Layout>
  );
};

export default CulturePage;
