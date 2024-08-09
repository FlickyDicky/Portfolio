import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProjectsTitle() {
    const title = "Projects I have worked on.";
    const ref = useRef(null);
    const inView = useInView(ref, {
        triggerOnce: false,
        margin: "-200px",
    });

    return (
        <div ref={ref}>
            <motion.p
                className="title"
                animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : "100%",
                }}
            >
                {title}
            </motion.p>
        </div>
    );
}
