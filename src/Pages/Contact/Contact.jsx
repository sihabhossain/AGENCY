import ContactForm from "./ContactForm/ContactForm";
import TitleCover from "../../Components/TitleCover/TitleCover";

const Contact = () => {
  return (
    <>
      <TitleCover serviceText='Our contact' pageTitle='Our contact'></TitleCover>
      {/* Contact form */}
      <ContactForm></ContactForm>
    </>
  );
};

export default Contact;
