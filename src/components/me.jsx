import { useTranslation } from "react-i18next";

export default function Me() {
    const { t } = useTranslation();
    return (
        <div className="me">
            <div className="portrait-container">
                <img src="/images/ryan.jpg" alt="Ryan Buck Bamford" />
            </div>
            <div>
                <h1>
                    <span>Ryan Buck Bamford</span>
                </h1>
                <p>{t("role")}</p>
                <span className="gradient-text">Fullstack</span>
            </div>
        </div>
    );
}
