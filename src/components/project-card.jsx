import { useTranslation } from "react-i18next";

export default function ProjectCard() {
    const { t } = useTranslation();
    const projects = t("projects.list", { returnObjects: true });
    return (
        <div className="card-wrapper">
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <img src={"/images/projects/"+project.img[0]} alt="" />
                    <div className="project">
                        <h2>{project.name}</h2>
                        <hr />
                        <p>{project.description}</p>
                        <div className="technologies">
                            {project.icons.map((icon, index) => (
                                <i key={index} className={icon} title={project.technologies[index]}></i>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
