import ProjectsTitle from "../components/projects-title";
import ProjectCard from "../components/project-card";

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <div>
                <ProjectsTitle />
                <ProjectCard />
                <div className="circle small"></div>
                <div className="circle big"></div>
            </div>
        </section>
    );
}

