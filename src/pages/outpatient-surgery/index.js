import Layout from "@/components/Layout/Layout";
import OutpatientHero from "@/components/Outpatient/OutpatientHero";
import OutpatientSurgery from "@/components/Outpatient/OutpatientSurgery";

const ServicesPage = () => {
  return (
    <Layout>
      <OutpatientHero />
      <OutpatientSurgery />
    </Layout>
  );
};

export default ServicesPage;
