import React, { useState, useEffect } from "react";

export default function NavLinks() {

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
                <a href="#about"><span>About</span></a>
            </li>
            <li>
                <a href="#projects"><span>Proyectos</span></a>
            </li>
            <li>
                <a href="#contact"><span>Contacto</span></a>
            </li>
        </ul>
    );
}
