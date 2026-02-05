import { useTypewriter } from "../hooks/useTypewriter";
import { FaCode, FaGraduationCap, FaArrowRight, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
    const typingText = useTypewriter({
        titles: ["Software Developer", "Frontend Engineer", "React Developer", "Problem Solver"],
        typingSpeed: 100,
        deletingSpeed: 50,
        pauseTime: 1500
    });

    return (
        <section id="about" className="py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-white text-5xl md:text-7xl font-bold mb-6">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Me</span>
                    </h1>
                    <div className="h-24 flex items-center justify-center">
                        <p className="text-white text-3xl md:text-4xl font-bold">
                            I'm a{" "}
                            <span className="text-purple-400 border-b-2 border-purple-500 pb-1">
                                {typingText}
                            </span>
                        </p>
                    </div>
                    <p className="text-purple-300 text-xl mt-4 flex items-center justify-center gap-2">
                        <FaGraduationCap className="animate-pulse" />
                        Currently, an intern at the ICT Authority
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Introduction */}
                    <div className="space-y-8">
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 
                                     backdrop-blur-sm border border-gray-700/50 shadow-xl">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <FaCode className="text-purple-400" />
                                My Journey
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                I'm a passionate software developer specializing in creating modern web applications with React and Tailwind CSS. 
                                With a strong foundation in frontend development and a keen eye for design, I enjoy transforming complex problems 
                                into simple, beautiful, and intuitive solutions.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed mt-4">
                                I'm constantly learning new technologies and best practices to build efficient, scalable applications that provide 
                                exceptional user experiences. Currently expanding my skills in full-stack development while contributing to 
                                real-world projects at the ICT Authority.
                            </p>
                            
                            <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-purple-900/20 to-pink-900/20 
                                         border border-purple-700/30">
                                <p className="text-purple-200 text-sm">
                                    "Code is like humor. When you have to explain it, it's bad."
                                    <span className="block text-right text-xs text-gray-400 mt-1">- Cory House</span>
                                </p>
                            </div>
                        </div>

                        {/* Quick Stats - Hidden on mobile */}
                        <div className="hidden lg:grid grid-cols-3 gap-4">
                            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-900/30 to-purple-800/30 
                                         border border-purple-700/20">
                                <div className="text-2xl font-bold text-purple-300">1+</div>
                                <div className="text-sm text-gray-400">Years Experience</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-pink-900/30 to-purple-800/30 
                                         border border-pink-700/20">
                                <div className="text-2xl font-bold text-pink-300">5+</div>
                                <div className="text-sm text-gray-400">Projects Built</div>
                            </div>
                            <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-900/30 to-cyan-800/30 
                                         border border-blue-700/20">
                                <div className="text-2xl font-bold text-blue-300">5+</div>
                                <div className="text-sm text-gray-400">Technologies</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Focus Areas */}
                    <div className="space-y-8">
                        {/* Philosophy - Always visible */}
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 
                                     backdrop-blur-sm border border-gray-700/50 shadow-xl">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <FaLightbulb className="text-yellow-400" />
                                My Approach
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-gray-300">
                                    <div className="mt-1 text-purple-400">•</div>
                                    <span><span className="text-white font-semibold">Clean Code:</span> Writing maintainable, well-documented code that stands the test of time</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-300">
                                    <div className="mt-1 text-purple-400">•</div>
                                    <span><span className="text-white font-semibold">User-Centric Design:</span> Creating interfaces that are not just functional but delightful to use</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-300">
                                    <div className="mt-1 text-purple-400">•</div>
                                    <span><span className="text-white font-semibold">Continuous Learning:</span> Staying updated with the latest technologies and best practices</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-300">
                                    <div className="mt-1 text-purple-400">•</div>
                                    <span><span className="text-white font-semibold">Problem Solving:</span> Breaking down complex challenges into manageable solutions</span>
                                </li>
                            </ul>
                        </div>

                        {/* Current Focus - Hidden on mobile */}
                        <div className="hidden lg:block p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 
                                     backdrop-blur-sm border border-purple-700/30 shadow-xl">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <FaRocket className="text-pink-400" />
                                Currently Learning
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-purple-900/20 border border-purple-700/30">
                                    <div className="text-sm text-purple-300 mb-1">Frontend</div>
                                    <div className="text-white">TypeScript</div>
                                </div>
                                <div className="p-4 rounded-lg bg-pink-900/20 border border-pink-700/30">
                                    <div className="text-sm text-pink-300 mb-1">Backend</div>
                                    <div className="text-white">Node.js</div>
                                </div>
                                <div className="p-4 rounded-lg bg-blue-900/20 border border-blue-700/30">
                                    <div className="text-sm text-blue-300 mb-1">DevOps</div>
                                    <div className="text-white">Docker</div>
                                </div>
                                <div className="p-4 rounded-lg bg-green-900/20 border border-green-700/30">
                                    <div className="text-sm text-green-300 mb-1">Database</div>
                                    <div className="text-white">MongoDB</div>
                                </div>
                            </div>
                            
                            <div className="mt-8 pt-6 border-t border-purple-700/30">
                                <a 
                                    href="#contact" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg 
                                             bg-gradient-to-r from-purple-600 to-pink-600 
                                             text-white font-semibold hover:from-purple-700 hover:to-pink-700 
                                             hover:shadow-lg hover:shadow-purple-500/30 
                                             transition-all duration-300 group"
                                >
                                    Let's Connect
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission Statement */}
                <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-gray-900/30 via-purple-900/20 to-gray-900/30 
                             backdrop-blur-sm border border-gray-700/50 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">My Mission</h3>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        To create impactful digital solutions that not only meet technical requirements but also 
                        provide delightful user experiences, while continuously growing as a developer and 
                        contributing to the tech community.
                    </p>
                </div>
                
                {/* Mobile-only */}
                <div className="lg:hidden mt-12 text-center">
                    <a 
                        href="#contact" 
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg 
                                 bg-gradient-to-r from-purple-600 to-pink-600 
                                 text-white font-semibold hover:from-purple-700 hover:to-pink-700 
                                 hover:shadow-lg hover:shadow-purple-500/30 
                                 transition-all duration-300 group"
                    >
                        Let's Connect
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;