import { useTranslation } from "react-i18next";

export default function Socials() {
    const { t } = useTranslation();
    const socials = t("socials", { returnObjects: true });

    return (
        <>
            <ul className="socials">
                {Object.values(socials).map((social, index) => (
                    <li key={index}>
                        <a href={social.url} target="_blank">
                            <i className={social.icon}></i>
                            {' '+social.name}
                        </a>
                    </li>
                ))}
                <li>
                    <a href={"mailto:rbuckbamford@gmail.com?subject="+t("email.subject")}>
                    <i className="fa-solid fa-envelope"></i> rbuckbamford@gmail.com
                    </a>
                </li>
            </ul>
        </>
    );
}
