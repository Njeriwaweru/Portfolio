import { FaReact, FaJsSquare, FaPython, FaNodeJs, FaGitAlt, FaDatabase, FaHtml5, FaCss3Alt, FaAws, FaDocker, FaFigma, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiMongodb, SiExpress, SiPostgresql, SiRedux, SiFirebase, SiGraphql } from 'react-icons/si';

const skillsData = [
    { 
        name: "React", 
        icon: FaReact, 
        color: "text-cyan-400",
        delay: 0
    },
    { 
        name: "JavaScript", 
        icon: FaJsSquare, 
        color: "text-yellow-400",
        delay: 100
    },
    { 
        name: "TypeScript", 
        icon: SiTypescript, 
        color: "text-blue-500",
        delay: 200
    },
    { 
        name: "Python", 
        icon: FaPython, 
        color: "text-green-400",
        delay: 300
    },
    { 
        name: "Node.js", 
        icon: FaNodeJs, 
        color: "text-green-600",
        delay: 400
    },
    { 
        name: "Next.js", 
        icon: SiNextdotjs, 
        color: "text-gray-100",
        delay: 500
    },
    { 
        name: "Tailwind CSS", 
        icon: SiTailwindcss, 
        color: "text-teal-400",
        delay: 600
    },
    // { 
    //     name: "MongoDB", 
    //     icon: SiMongodb, 
    //     color: "text-green-500",
    //     delay: 700
    // },
    // { 
    //     name: "Express", 
    //     icon: SiExpress, 
    //     color: "text-gray-400",
    //     delay: 800
    // },
    // { 
    //     name: "PostgreSQL", 
    //     icon: SiPostgresql, 
    //     color: "text-blue-400",
    //     delay: 900
    // },
    { 
        name: "Redux", 
        icon: SiRedux, 
        color: "text-purple-400",
        delay: 1000
    },
    // { 
    //     name: "AWS", 
    //     icon: FaAws, 
    //     color: "text-orange-400",
    //     delay: 1100
    // },
    // { 
    //     name: "Docker", 
    //     icon: FaDocker, 
    //     color: "text-blue-400",
    //     delay: 1200
    // },
    { 
        name: "Firebase", 
        icon: SiFirebase, 
        color: "text-yellow-500",
        delay: 1300
    },
    // { 
    //     name: "GraphQL", 
    //     icon: SiGraphql, 
    //     color: "text-pink-500",
    //     delay: 1400
    // },
    { 
        name: "Git", 
        icon: FaGitAlt, 
        color: "text-orange-500",
        delay: 1500
    },
    { 
        name: "GitHub", 
        icon: FaGithub, 
        color: "text-gray-100",
        delay: 1600
    },
    { 
        name: "Figma", 
        icon: FaFigma, 
        color: "text-purple-500",
        delay: 1700
    },
    { 
        name: "HTML5", 
        icon: FaHtml5, 
        color: "text-orange-600",
        delay: 1800
    },
    { 
        name: "CSS3", 
        icon: FaCss3Alt, 
        color: "text-blue-500",
        delay: 1900
    },
];

export default skillsData;