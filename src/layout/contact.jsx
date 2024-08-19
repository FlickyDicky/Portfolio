import Title from "../components/title";
import ContactForm from "../components/contact-form";
import Socials from "../components/socials";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();
    return (
        <section id="contact" className="contact">
            <div>
                <Title titleName={t("contact.title")} subtitle={t("contact.subtitle")} />
                 <div className="contact-group">
                    <Socials />
                    <ContactForm />
                 </div>
            </div>
        </section>
    );
}
