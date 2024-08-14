import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function NavLinks() {

    const { t } = useTranslation();
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        setHidden(!(currentScrollY < lastScrollY || currentScrollY < 2));

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <ul className={`nav-links ${hidden ? "hidden" : ""}`}>
            <li>
                <a href="#about"><span>{t("navbar.about")}</span></a>
            </li>
            <li>
                <a href="#projects"><span>{t("navbar.projects")}</span></a>
            </li>
            <li>
                <a href="#contact"><span>{t("navbar.contact")}</span></a>
            </li>
        </ul>
    );
}
