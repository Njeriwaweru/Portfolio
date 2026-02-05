import { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import experienceData from '../data/experienceData';

const Experience = () => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-white text-center text-5xl md:text-6xl font-bold mb-4">
                    Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Experience</span>
                </h1>
                <p className="text-gray-400 text-center text-base mb-16 max-w-2xl mx-auto">
                    My professional journey and contributions
                </p>

                <div className="max-w-4xl mx-auto">
                    {/* Timeline connector line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-blue-600 hidden md:block"></div>

                    {experienceData.map((exp, index) => (
                        <div 
                            key={exp.id}
                            className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto md:w-1/2' : 'md:pl-12 md:mr-auto md:w-1/2'}`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-gray-900 z-10 hidden md:block"></div>

                            <div 
                                className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm 
                                    border border-gray-700/50 rounded-2xl shadow-xl p-8
                                    transform transition-all duration-500 hover:scale-[1.02]
                                    hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/50
                                    cursor-pointer ${expandedId === exp.id ? 'ring-2 ring-purple-500/30' : ''}`}
                                onClick={() => toggleExpand(exp.id)}
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="text-3xl text-purple-400">
                                            {/* check for image */}
                                            {exp.logo && (
                                                typeof exp.logo === 'string' && 
                                                (exp.logo.includes('/') || exp.logo.includes('.')) ? (
                                                    <img 
                                                        src={exp.logo} 
                                                        alt={`${exp.company} logo`}
                                                        className="w-12 h-12 object-contain bg-gray-300 rounded-full"
                                                    />
                                                ) : (
                                                    <span>{exp.logo}</span>
                                                )
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="text-white text-xl font-bold">{exp.position}</h3>
                                            <p className="text-purple-300 text-base font-semibold">{exp.company}</p>
                                        </div>
                                    </div>
                                    <div className="text-xl text-purple-400">
                                        {expandedId === exp.id ? <FaChevronUp /> : <FaChevronDown />}
                                    </div>
                                </div>

                                {/* Meta info */}
                                <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt className="text-purple-400" />
                                        <span>{exp.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-purple-400" />
                                        <span>{exp.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MdWork className="text-purple-400" />
                                        <span className="bg-purple-900/30 px-3 py-1 rounded-full text-xs">
                                            {index === 0 ? 'Current' : 'Past'}
                                        </span>
                                    </div>
                                </div>

                                {/* Expandable Content */}
                                <div className={`overflow-hidden transition-all duration-500 ${
                                    expandedId === exp.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    {/* Description */}
                                    <div className="mb-6">
                                        <h4 className="text-white text-base font-semibold mb-3">Responsibilities</h4>
                                        <ul className="space-y-2">
                                            {exp.description.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-300">
                                                    <span className="text-purple-400 mt-1">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Skills */}
                                    <div>
                                        <h4 className="text-white text-base font-semibold mb-3">Technologies Used</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="px-3 py-1 bg-gradient-to-r from-purple-900/30 to-blue-900/30 
                                                             text-purple-300 rounded-full text-sm border border-purple-700/50"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;