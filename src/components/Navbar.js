import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from "./Link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { title: "Home", link: "/" },
        { title: "About", link: "about" },
        { title: "Projects", link: "projects" },
        { title: "Experience", link: "experience" },
        { title: "Contact", link: "contact" }
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 
                          text-white flex h-14 md:h-28 px-4 md:px-8 pt-4 md:pt-8 items-center 
                          justify-between border-b-4 rounded-md border-gray-700/50
                          bg-primary/95 backdrop-blur-sm shadow-xl"
            >
                <p className="font-playwrite text-xl md:text-2xl pl-4 md:pl-16">
                    Praise Waweru
                </p>

                {/* Desktop Menu */}
                <div className="hidden md:flex justify-between gap-8 lg:gap-28 pr-4 lg:pr-36">
                    {navLinks.map((item) => (
                        <Link key={item.title} title={item.title} link={item.link} />
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-2xl text-gray-300 hover:text-purple-400 
                             transition-colors duration-300 pr-4"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed top-20 inset-x-0 z-40 bg-primary/95 backdrop-blur-lg 
                          border-b border-gray-700/50 transform transition-all duration-300 
                          md:hidden ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
            >
                <div className="flex flex-col p-6 space-y-6">
                    {navLinks.map((item) => (
                        <a
                            key={item.title}
                            href={item.link}
                            onClick={(e) => {
                                e.preventDefault();
                                const sectionId = item.link.replace('/', '');
                                const element = document.getElementById(sectionId === "" ? "home" : sectionId);
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                                setIsMenuOpen(false);
                            }}
                            className="text-white text-lg font-medium py-3 px-4 rounded-lg
                                     hover:bg-gray-800/50 hover:text-purple-400 
                                     transition-all duration-300 border-l-4 border-transparent
                                     hover:border-purple-500"
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            </div>

            {/* Backdrop for mobile menu */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* Spacer to prevent content from hiding behind fixed navbar */}
            <div className="h-20 md:h-28"></div>
        </>
    )
}

export default Navbar;