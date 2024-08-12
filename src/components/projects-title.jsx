import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProjectsTitle() {
    const title = "Projects I have worked on.";
    const titleRef = useRef(null);
    const inView = useInView(titleRef, {
        triggerOnce: false,
        margin: "-200px",
    });

    return (
        <div ref={titleRef}>
            <motion.span
                className="title"
                animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : "100%",
                }}
            >
                {title}
            </motion.span>
        </div>
    );
}
