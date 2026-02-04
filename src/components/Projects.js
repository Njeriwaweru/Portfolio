import ProjectCard from "./ProjectCards";

const Projects = () => {
    return (
        <div className="mt-16">
            <h1 className="text-white text-center text-7xl font-bold">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 px-24 pt-16">
                <ProjectCard name="Project 1" description="A brief description of the first project. "/>
                <ProjectCard name="Project 1" description="A brief description of the first project. "/>
                <ProjectCard name="Project 1" description="A brief description of the first project. "/>
                <ProjectCard name="Project 1" description="A brief description of the first project. "/>
            </div>
        </div>
    )
}

export default Projects;