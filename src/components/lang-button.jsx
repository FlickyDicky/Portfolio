import {useTranslation} from 'react-i18next';

export default function LangButton() {
    const {i18n} = useTranslation();
    return (
        <button
            className="lang-button"
            onClick={() => i18n.changeLanguage(i18n.language === "en" ? "es" : "en")}
        >
            {i18n.language === "en" ? "ES" : "EN"}
        </button>
    );
}