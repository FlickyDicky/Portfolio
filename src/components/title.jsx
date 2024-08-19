import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Title(props) {
    const ref = useRef(null);
    const inView = useInView(ref, {
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
                {props.titleName}
                {props.subtitle && <p>{props.subtitle}</p>}
            </motion.div>
            <div ref={ref}></div>
        </>
    );
}
