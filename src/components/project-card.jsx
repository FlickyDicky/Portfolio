import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Projects() {
    const { t } = useTranslation();
    const projects = t("projects.list", { returnObjects: true });

    const refs = useRef(projects.map(() => useRef(null)));

    return (
        <div className="card-wrapper">
            {projects.map((project, index) => {
                const inView = useInView(refs.current[index], {
                    once: true,
                });
                const spawnRight = index % 2 === 0 ? 80 : -80;
                return (
                    <motion.div
                        key={index}
                        className="project-card"
                        animate={{
                            opacity: inView ? 1 : 0,
                            x: inView ? 0 : spawnRight,
                        }}
                        transition={{
                            delay: 0.05,
                        }}
                    >
                        <img src={"/images/projects/" + project.img[0]} alt={project.name} />
                        <div className="project">
                            <h2>{project.name}</h2>
                            <hr />
                            <p>{project.description}</p>
                            <div className="technologies">
                                {project.icons.map((icon, iconIndex) => (
                                    <i key={iconIndex} className={icon} title={project.technologies[iconIndex]}></i>
                                ))}
                            </div>
                            <div ref={refs.current[index]}></div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
