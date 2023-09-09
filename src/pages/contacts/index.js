import Head from "next/head";
import Contacts from "@/components/Contacts/Contacts";

const ContactsPage = (props) => {
  return (
    <>
      <Head>
        <title>Artamedicus</title>
        <meta
          name="description"
          content="ArtaMedicus - Преобразим Ваши Мечты в Реальность"
        />
        <meta property="og:image" content="/OG.png" />{" "}
      </Head>
      <Contacts />
    </>
  );
};

export default ContactsPage;
