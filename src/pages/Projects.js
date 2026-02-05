import ProjectCard from "../components/ProjectCards";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa6";

const Projects = () => {
    return (
        <section id="projects" className="pt-8 px-4 md:px-8">
            <div className="mx-auto">
                <h1 className="text-white text-center text-5xl md:text-6xl font-bold">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
                </h1>
                <p className="text-gray-400 text-center text-base mb-12 max-w-2xl mx-auto mt-6">
                    A selection of projects I've built to solve problems and showcase my skills
                </p>
                
                {/* Mobile View - Only 2 projects */}
                <div className="lg:hidden grid grid-cols-1 gap-8 px-6 sm:px-12 pt-8">
                    <ProjectCard
                        name="Her Journal"
                        description="A minimalist daily journal app that allows users to track mood, write reflections, and set small goals."
                        icon={<BsJournalBookmarkFill />}
                        link="https://her-journal.vercel.app/"
                    />
                    <ProjectCard
                        name="Frontend Mentor"
                        description="This project contains a collection of frontend projects built from challenges on Frontend Mentor. Each project focuses on improving HTML, CSS, and JavaScript skills through real-world UI layouts and components."
                        icon={<FaLaptopCode />}
                        link="https://github.com/Njeriwaweru/frontend-mentor"
                    />
                </div>
                
                {/* Desktop View */}
                <div className="hidden lg:grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 px-24 pt-16">
                    <ProjectCard
                        name="Her Journal"
                        description="A minimalist daily journal app that allows users to track mood, write reflections, and set small goals."
                        icon={<BsJournalBookmarkFill />}
                        link="https://her-journal.vercel.app/"
                    />
                    <ProjectCard
                        name="Linkedin clone"
                        description="A LinkedIn-inspired social networking application built to practice modern frontend development with React, Redux, and Firebase."
                        icon={<AiOutlineLinkedin />}
                        link="https://linkedin-clone-ruddy-eight.vercel.app/"
                    />
                    <ProjectCard
                        name="Frontend Mentor"
                        description="This project contains a collection of frontend projects built from challenges on Frontend Mentor. Each project focuses on improving HTML, CSS, and JavaScript skills through real-world UI layouts and components."
                        icon={<FaLaptopCode />}
                        link="https://github.com/Njeriwaweru/frontend-mentor"
                    />
                    <ProjectCard
                        name="Bluecollar"
                        description="This project aims to solve the problems faced by the blackcollar youth professionals i.e carpenters"
                        icon={<FaToolbox />}
                        link="https://github.com/craizytech/Bluecollar-Project"
                    />
                </div>
                
                <div className="mt-16 text-center pb-16">
                    <p className="text-gray-500">
                        Want to see more? Check out my{" "}
                        <a 
                            href="https://github.com/Njeriwaweru" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-purple-300 underline"
                        >
                            GitHub profile
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Projects;