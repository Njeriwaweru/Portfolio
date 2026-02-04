const ProjectCards = ({ name, description }) =>{
    return (
        <div className="p-16 rounded-3xl shadow-lg shadow-gray-800/50 border-t-8 border-purple-600
                hover:scale-105 
                hover:shadow-[0_0_15px_5px_rgba(147,51,234,0.3),0_0_30px_15px_rgba(147,51,234,0.2)]
                transition-all duration-300"
        >
            <h2 className="text-white text-xl font-bold">{name}</h2>
            <p className="text-gray-300">{description}</p>
        </div>
    )
}

export default ProjectCards;