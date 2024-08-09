import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Name() {
    const name = "Rbb";
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: false, margin: "-50px" });

    return (
        <div className="name" ref={ref}>
            {name.split("").map((letter, index) => (
                <motion.span
                    key={letter}
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : "100%",
                    }}
                    transition={{
                        delay: index * 0.1,
                    }}
                >
                    {letter}
                </motion.span>
            ))}
        </div>
    );
}
