import Head from "next/head";
import Uslugi from "@/components/Uslugi/Uslugi";

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Artamedicus</title>
        <meta
          name="description"
          content="ArtaMedicus - Преобразим Ваши Мечты в Реальность"
        />
        <meta property="og:image" content="/OG.png" />
      </Head>
      <Uslugi />
    </>
  );
};

export default ServicesPage;
