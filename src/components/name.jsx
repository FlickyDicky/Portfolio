import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Name() {
  const name = "Rbb";
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: '-50px' });

  return (
    <div className="name" ref={ref}>
      {name.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{
            delay: index * .3,
            duration: 0.5,
            ease: "easeInOut",
          }}
          
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}
