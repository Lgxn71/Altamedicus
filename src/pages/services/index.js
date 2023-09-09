import Head from "next/head";
import Uslugi from "@/components/Uslugi/Uslugi";

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Artamedicus</title>
        <meta
          name="description"
          content="Услуги предоставляемые Альтамедикус"
        />
      </Head>
      <Uslugi />
    </>
  );
};

export default ServicesPage;
