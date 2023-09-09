import Head from "next/head";
import Specialists from "@/components/AboutUs/Specialists/Specialists";

const EmployeesPage = () => {
  return (
    <>
      <Head>
        <title>Artamedicus</title>
        <meta name="description" content="Специалисты Альтамедкус" />
      </Head>
      <Specialists />
    </>
  );
};

export default EmployeesPage;
