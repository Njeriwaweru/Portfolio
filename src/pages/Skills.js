import { useEffect, useRef, useState } from 'react';
import skillsData from '../data/skillsData';

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const skillsRef = useRef(null);

    const mobileSkillsLimit = 6;
    const skillsToShow = showAll ? skillsData : skillsData.slice(0, mobileSkillsLimit);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { 
                threshold: 0.1,
                rootMargin: '-50px 0px'
            }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    return (
        <section ref={skillsRef} className="pt-8 pb-16">
            <div className="container mx-auto px-4">
                <h1 className="text-white text-center text-5xl md:text-7xl font-bold mb-4">
                    Skills
                </h1>
                <p className="text-gray-400 text-center text-lg mb-16 max-w-2xl mx-auto">
                    Technologies I work with
                </p>
                
                {/* Desktop Grid - Always show all */}
                <div className="hidden lg:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                    {skillsData.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={index}
                                className={`flex flex-col items-center justify-center p-6 rounded-2xl 
                                    bg-gradient-to-br from-gray-900/80 to-gray-800/80 
                                    backdrop-blur-sm border border-gray-700/50 shadow-xl
                                    transform transition-all duration-700 ease-out
                                    hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20
                                    hover:border-purple-500/50 hover:bg-gray-800/90
                                    ${isVisible 
                                        ? 'translate-y-0 opacity-100' 
                                        : '-translate-y-20 opacity-0'
                                    }`}
                                style={{
                                    transitionDelay: isVisible ? `${skill.delay}ms` : '0ms',
                                }}
                            >
                                <div className={`text-5xl mb-3 ${skill.color}`}>
                                    <Icon />
                                </div>
                                <h3 className="text-white text-center text-sm md:text-base font-medium">
                                    {skill.name}
                                </h3>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile Grid - Show limited or all based on showAll state */}
                <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {skillsToShow.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={index}
                                className={`flex flex-col items-center justify-center p-6 rounded-2xl 
                                    bg-gradient-to-br from-gray-900/80 to-gray-800/80 
                                    backdrop-blur-sm border border-gray-700/50 shadow-xl
                                    transform transition-all duration-700 ease-out
                                    hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20
                                    hover:border-purple-500/50 hover:bg-gray-800/90
                                    ${isVisible 
                                        ? 'translate-y-0 opacity-100' 
                                        : '-translate-y-20 opacity-0'
                                    }`}
                                style={{
                                    transitionDelay: isVisible ? `${skill.delay}ms` : '0ms',
                                }}
                            >
                                <div className={`text-5xl mb-3 ${skill.color}`}>
                                    <Icon />
                                </div>
                                <h3 className="text-white text-center text-sm md:text-base font-medium">
                                    {skill.name}
                                </h3>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile "Show More" Button */}
                {!showAll && skillsData.length > mobileSkillsLimit && (
                    <div className="lg:hidden text-center mt-10">
                        <button
                            onClick={() => setShowAll(true)}
                            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 
                                     border border-purple-500/30 text-purple-300 font-medium
                                     hover:from-purple-600/30 hover:to-pink-600/30 hover:border-purple-400/50
                                     hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                        >
                            Show All Skills ({skillsData.length - mobileSkillsLimit} more)
                        </button>
                    </div>
                )}

                {/* Mobile "Show Less" Button */}
                {showAll && (
                    <div className="lg:hidden text-center mt-10">
                        <button
                            onClick={() => setShowAll(false)}
                            className="px-6 py-3 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 
                                     border border-gray-700/50 text-gray-300 font-medium
                                     hover:border-purple-500/30 hover:text-purple-300
                                     transition-all duration-300"
                        >
                            Show Less
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Skills;