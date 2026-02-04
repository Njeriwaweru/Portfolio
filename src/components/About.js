import { useEffect, useState } from "react";
import { useTypewriter } from "../hooks/useTypewriter";

const About = () => {
    const typingText = useTypewriter({
        titles: ["Software Developer", "Frontend Engineer", "React Developer"],
        typingSpeed: 100,
        deletingSpeed: 50,
        pauseTime: 1000
    });

    return (
        <div className="mt-8">
                <p className="text-white text-6xl font-bold pl-36">I'm a <span className="text-purple-600">{typingText}</span></p>
                <p className="text-white text-2xl pl-36 pt-2">Currently, an intern at the ICT Authority.</p>
                <p className="text-white text-2xl pl-36 pt-16 pr-36">
                    I'm a passionate software developer specializing in creating modern web applications with React <br />and Tailwind CSS. 
                    With a strong foundation in frontend development and a keen eye for design, I <br />enjoy transforming complex problems 
                    into simple, beautiful, and intuitive solutions. I'm constantly <br/>learning new technologies and best practices to build 
                    efficient, scalable applications that provide<br/> exceptional user experiences.
                </p>
        </div>
    )
}

export default About;