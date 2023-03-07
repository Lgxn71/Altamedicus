import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Layout/Footer";
import NavigationBar from "@/components/Layout/NavigationBar";

const ContactsPage = (props) => {
  return (
    <section>
      <NavigationBar />
      <Contacts />
      <Footer />
    </section>
  );
};

export default ContactsPage;
