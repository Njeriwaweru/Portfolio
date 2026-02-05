import bannerImg from "../assets/images/banner.jpeg"

const Banner = () => {
    return (
        <section id="home">
            {/* Mobile View */}
            <div className="lg:hidden flex flex-col items-center px-6 py-12">
                {/* Text for mobile */}
                <p className="text-white text-2xl sm:text-3xl font-medium mb-8 text-center">
                    Hello, I am <span className="text-purple-500 font-semibold">Praise Waweru</span>
                </p>
                
                {/* Image for mobile */}
                <div className="relative">
                    <div className="absolute inset-0 blur-3xl bg-blue-500/30 rounded-full w-48 h-48 sm:w-56 sm:h-56"></div>
                    <img
                        src={bannerImg}
                        alt="Praise Waweru"
                        className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-full shadow-2xl shadow-blue-500/50 object-cover"
                    />
                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden lg:flex relative gap-48 px-36 pb-16">
                <div>
                    <div className="absolute inset-0 blur-3xl bg-blue-500/30 rounded-full w-64 h-64 mt-28 ml-28"></div>
                    <p className="text-white ml-40 mt-16 font-medium text-2xl">Hello, I am <span className="text-purple-500">Praise Waweru</span></p>
                    <img
                        src={bannerImg}
                        alt="Praise Waweru"
                        className="relative object-cover mt-20 ml-28 shadow-2xl rounded-full shadow-blue-500/50 h-80 w-80"
                    />
                </div>
                <div>
                    <p className="text-white text-4xl mt-44">A developer who<br/> <span className="text-6xl font-bold">Judges a book<br/> by its <span className="text-purple-500">cover...</span></span></p>
                    <p className="text-white pt-6 text-xl">Because if the cover does not impress you, what else can?</p>
                </div>
            </div>
        </section>
    )
}

export default Banner;