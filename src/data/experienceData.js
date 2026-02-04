import ictaLogo from "../assets/images/ictalogo.png";
import hevaraLogo from "../assets/images/hevaralogo.png"

const experienceData = [
    {
        id: 1,
        company: "ICT Authority.",
        position: "Software Development Intern",
        duration: "Jan 2026 - Present",
        location: "Nyeri County Assembly",
        description: [
            "Provide IT maintenance and technical support in corporate environment.",
            "Work with WordPress and custom CMS solutions",
            "Self-study JavaScript and Python through online platforms and documentation.",
            "Develop personal coding projects to reinforce programming concepts.",
            "Apply problem-solving skills across both operational IT and software development contexts."
        ],
        skills: ["Javascript", "React", "Python"],
        logo: ictaLogo
    },
    {
        id: 2,
        company: "Hevara",
        position: "Junior Frontend Developer",
        duration: "Feb 2025 - Aug 2025",
        location: "Remote",
        description: [
            "Developed and maintained reusable React components using Redux for state management. ",
            "Integrated RESTful APIs to dynamically feed data into the application, ensuring seamless data flow and user experience.",
            "Collaborated with senior developers to implement responsive layouts."
        ],
        skills: ["React", "Redux", "REST APIs", "Git"],
        logo: hevaraLogo
    },
    {
        id: 3,
        company: "Hevara",
        position: "Frontend Developer intern",
        duration: "Sep 2024 -Feb 2025",
        location: "Remote",
        description: [
            "Built and optimized React components using modern hooks and functional programming patterns.",
            "Integrated third-party APIs and libraries to enhance application functionality and user experience.",
            "Collaborated in an Agile team using Git/Bitbucket, participating in weekly code reviews that improved overall code quality."
        ],
        skills: ["React", "Redux", "REST APIs", "Git"],
        logo: hevaraLogo
    }
];

export default experienceData;