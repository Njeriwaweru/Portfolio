import bannerImg from "../assets/images/banner.jpeg"
import arrow from "../assets/images/arrow.png"

const Banner = () => {
    return (
        <div className="relative flex gap-48 px-36 pt-24 pb-16">
            <div>
                <div className="absolute inset-0 blur-3xl bg-blue-500/30 rounded-full w-64 h-64 mt-28 ml-28"></div>
                <p className="text-white text-4xl ml-40 font-medium">Hello, I am <span className="text-purple-500">Praise Waweru</span></p>
                {/* <img 
                    src = {arrow}
                    alt = "arrow"
                    className="w-20 h-30 ml-56"
                /> */}
                <img
                    src={bannerImg}
                    alt="Banner Image"
                    className="relative object-cover h-96 w-96 mt-28 ml-28 shadow-2xl rounded-full shadow-blue-500/50"
                />
            </div>
            <div>
                <p className="text-white text-5xl mt-36">A developer who<br/> <span className="text-8xl font-bold">Judges a book<br/> by its <span className="text-purple-500">cover...</span></span></p>
                <p className="text-white pt-6 text-2xl">Because if the cover does not impress you, what else can?</p>
            </div>
        </div>
    )
}

export default Banner;