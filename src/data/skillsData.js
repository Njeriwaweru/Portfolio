import { FaReact, FaJsSquare, FaPython, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaFigma, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiRedux, SiFirebase } from 'react-icons/si';

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
    { 
        name: "Redux", 
        icon: SiRedux, 
        color: "text-purple-400",
        delay: 1000
    },
    { 
        name: "Firebase", 
        icon: SiFirebase, 
        color: "text-yellow-500",
        delay: 1300
    },
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