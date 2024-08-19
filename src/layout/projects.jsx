import Title from "../components/title";
import ProjectCard from "../components/project-card";
import { useTranslation } from "react-i18next";

export default function Projects() {
    const { t } = useTranslation();
    return (
        <section id="projects">
            <div>
                <Title titleName={t("projects.title")} />
                <ProjectCard />
                <div className="circle small"></div>
                <div className="circle big"></div>
            </div>
        </section>
    );
}

