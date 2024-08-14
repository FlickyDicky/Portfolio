import { delay, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function ProjectsTitle() {
    const { t } = useTranslation();
    const titleRef = useRef(null);
    const inView = useInView(titleRef, {
        once: true,
    });

    return (
        <>
            <motion.div
                className="title"
                animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 100,
                }}
                transition={{
                    delay: 0.1,
                }}
            >
                {t("projects.title")}
            </motion.div>
            <div ref={titleRef}></div>
        </>
    );
}
