import Head from "next/head";
import Specialists from "@/components/AboutUs/Specialists/Specialists";

const EmployeesPage = () => {
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
      <Specialists />
    </>
  );
};

export default EmployeesPage;
