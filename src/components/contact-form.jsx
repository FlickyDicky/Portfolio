import { useTranslation } from "react-i18next";

export default function ContactForm() {

    const { t } = useTranslation();

    return (
        <form id="contact-form" method="POST" action={"https://formsubmit.co/"+import.meta.env.VITE_EMAIL_HASH}>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="text" name="_honey" style={{display: "none"}}></input>
            <input type="hidden" name="_template" value="box"></input>
            <div className="form-group">
                <input
                    placeholder={t("contact.form.name") + " *"}
                    type="text"
                    id="name"
                    name="name"
                    required
                />
                <input
                    placeholder="Email *"
                    type="email"
                    id="email"
                    name="email"
                    required
                />
            </div>
            <textarea
                placeholder={t("contact.form.message") + " *"}
                id="message"
                name="message"
                required
            />
            <button type="submit">
                <span>{t("contact.form.submit")}</span>
            </button>
        </form>
    );
}
