import { useTranslation } from "react-i18next";

export default function Me() {
    const { t } = useTranslation();
    return (
        <a className="me" href={"/documents/" + t("resume.link")} target="_blank">
            <div className="portrait-container">
                <img src="/images/ryan.jpg" alt="Ryan Buck Bamford" />
            </div>
            <div>
                <h1>
                    <span>Ryan Buck Bamford</span>
                </h1>
                <p>{t("role")}</p>
                <div>
                    <span className="gradient-text">Fullstack</span>
                </div>
            </div>
            <div className="download">{t("resume.title")}</div>
        </a>
    );
}
