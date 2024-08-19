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
            </ul>
        </>
    );
}
