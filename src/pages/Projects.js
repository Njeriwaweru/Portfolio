import ProjectCard from "../components/ProjectCards";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa6";

const Projects = () => {
    return (
        <div className="mt-16">
            <h1 className="text-white text-center text-7xl font-bold">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 px-24 pt-16">
                <ProjectCard
                    name="Her Journal"
                    description="A minimalist daily journal app that allows users to track mood, write reflections, and set small goals."
                    icon = <BsJournalBookmarkFill />
                    link = "https://her-journal.vercel.app/"
                />
                <ProjectCard
                    name="Linkedin clone"
                    description="A LinkedIn-inspired social networking application built to practice modern frontend development with React, Redux, and Firebase."
                    icon = <AiOutlineLinkedin />
                    link = "https://linkedin-clone-ruddy-eight.vercel.app/"
                />
                <ProjectCard
                    name="Frontend Mentor"
                    description="This project contains a collection of frontend projects built from challenges on Frontend Mentor. Each project focuses on improving HTML, CSS, and JavaScript skills through real-world UI layouts and components."
                    icon = <FaLaptopCode />
                    link = "https://github.com/Njeriwaweru/frontend-mentor"
                />
                <ProjectCard
                    name="Bluecollar"
                    description="This project aims to solve the problems faced by the blackcollar youth proffesionals i.e carpenters"
                    icon = <FaToolbox />
                    link = "https://github.com/craizytech/Bluecollar-Project"
                />
            </div>
        </div>
    )
}

export default Projects;