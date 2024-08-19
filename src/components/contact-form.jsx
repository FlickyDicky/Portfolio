import { useTranslation } from "react-i18next";
import key from "../../api.json"
import Swal from "sweetalert2";

export default function ContactForm() {
    const { t } = useTranslation();

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", key.web3forms.access_key);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Success!",
                text: "We received your submission",
                icon: "success",
            });
            event.target.reset();
        } else {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong while submitting the form.",
                icon: "error",
            });
        }
    };
    return (
        <form id="contact-form" onSubmit={onSubmit}>
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
