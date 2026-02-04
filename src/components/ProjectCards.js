const ProjectCards = ({ name, description, icon, link }) =>{
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block focus:outline-none"
        >
            <div className="p-16 rounded-3xl shadow-lg shadow-gray-800/50 border-t-8 border-purple-600
                    hover:scale-105 
                    hover:shadow-[0_0_15px_5px_rgba(147,51,234,0.3),0_0_30px_15px_rgba(147,51,234,0.2)]
                    transition-all duration-300 cursor-pointer
                    h-full min-h[300px] flex flex-col justify-between"
            >
                <div className="flex items-center gap-4">
                    <div className="text-purple-400 text-4xl">
                        {icon}
                    </div>
                    <h2 className="text-white text-2xl font-bold">{name}</h2>
                </div>
                    <p className="text-gray-300 mt-4 text-lg">{description}</p>
            </div>
        </a>
        
    )
}

export default ProjectCards;