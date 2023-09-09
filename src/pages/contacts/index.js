import Head from "next/head";
import Contacts from "@/components/Contacts/Contacts";

const ContactsPage = (props) => {
  return (
    <>
      <Head>
        <title>Artamedicus</title>
        <meta name="description" content="Наши контакты" />
      </Head>
      <Contacts />
    </>
  );
};

export default ContactsPage;
