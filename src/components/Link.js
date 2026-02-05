const Link = ({ title, link = "#", isActive = false, className = "" }) => {
    const handleClick = (e) => {
        e.preventDefault();
        if (link === "/") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const sectionId = link.replace('/', '');
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <a
            href={link}
            onClick={handleClick}
             className={`relative text-xl font-semibold transition-all duration-300
                ${isActive 
                    ? 'text-purple-400 scale-105' 
                    : 'text-gray-300 hover:text-purple-400 hover:scale-105'
                } 
                hover:drop-shadow-[0_0_8px_rgba(147,51,234,0.5)] ${className}`}
        >
            {title}
        </a>
    );
}

export default Link;